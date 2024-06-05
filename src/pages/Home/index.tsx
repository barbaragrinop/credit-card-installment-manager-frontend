import InstallmentsFilter from "./components/filter";
import Container from "@/components/Container";
import Table from "@/components/Table";
import useSWR from "swr";

import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useHomeTableColumn } from "./hooks/table-column.hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from 'yup';
import { useAuth } from "@/context/useAuth";
import { useHttpConfig } from "@/hooks/useHttpConfig";
import { Card } from "@/types/credit-card";
import { SelectProp } from "@/types/select";
import { useState } from "react";
import { useNotifier } from "@/hooks/useNotifier";
import { Purchase } from "@/types/purchase";
import { format } from "date-fns";

type FormValues = {
  loja: string;
  product: string;
  cartao: SelectProp;
  qtdParcelas: number;
  dtCompra: string;
  vlCompra: number;
}

const validation = object<FormValues>().shape({
  loja: string().required("Campo obrigatório"),
  product: string().required("Campo obrigatório"),
  cartao: object().shape({
    label: string().required("Campo obrigatório"),
    value: number().required("Campo obrigatório")
  }).required("Campo obrigatório"),

  qtdParcelas: number().required("Campo obrigatório").min(1, "Mínimo de 1 parcela"),
  dtCompra: string().required("Campo obrigatório"),
  vlCompra: number().required("Campo obrigatório").min(0.1, "Valor mínimo de 0.1"),
})


function HomePage() {
  const [editCardId, setEditCardId] = useState<number | null>(null)

  const { success } = useNotifier()
  const { columns } = useHomeTableColumn();
  const { user } = useAuth()
  const { api, fetcher } = useHttpConfig()
  const { data: purchases, mutate } = useSWR<Purchase[]>(`${import.meta.env.VITE_ENVIRONMENT}/purchase/get-purchases-by-userId?userId=${user?.id}`, fetcher)
  const { data: cards } = useSWR<Card[]>(`${import.meta.env.VITE_ENVIRONMENT}/card/get-cards-by-userId?userId=${user?.id}`, fetcher)

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver<FormValues>(validation),
    defaultValues: {
      loja: "",
      product: "",
      cartao: undefined,
      qtdParcelas: 0,
      dtCompra: "",
      vlCompra: 0
    },
    mode: "all"
  });

  async function submitForm(values: FormValues) {
    try {
      const method = editCardId ? "PUT" : "POST"

      let data: any = {
        store: values.loja,
        productName: values.product,
        cardId: values.cartao.value,
        installments: values.qtdParcelas,
        date: values.dtCompra,
        userId: user!.id,
        value: values.vlCompra
      }

      if (editCardId) {
        data = {
          ...data,
          id: editCardId
        }
      }

      await api({
        method,
        url: `${import.meta.env.VITE_ENVIRONMENT}/purchase`,
        data,
      });

      mutate()
      reset()
      success("Compra cadastrada com sucesso")
    } catch (err: any) {
      success("Erro ao cadastrar compra")
      console.log(err)
    }
  }

  return (
    <Container pageName="Home">
      <div className="min-h-full flex flex-col bg-gray-100 rounded p-4">
        <h1 className="text-3xl pb-12">
          Gerenciador de parcelas
        </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid grid-cols-3 gap-4">
            <Field.Text name="loja" id="loja" label="Loja" control={control} />
            <Field.Text name="product" id="product" label="Product" control={control} />
            <Field.Select options={cards?.map((x: Card) => ({ label: x.name, value: x.id })) || []} name="cartao" id="cartao" label="Cartão" control={control} />
            <Field.Number step="0.01" name="vlCompra" id="vlCompra" label="Valor total" control={control} />
            <Field.Number name="qtdParcelas" id="qtdParcelas" label="Qtd. Parcelas" control={control} />
            <Field.Date name="dtCompra" id="dtCompra" label="Data da compra" control={control} />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Cancelar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>

        {purchases && purchases?.length > 0 && (
          <>
            <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
            <InstallmentsFilter />
            <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
            {purchases?.map(({ store, date }: Purchase, key: any) => (
              <div key={key}>
                <div className="">
                  <div className="">
                    <p className="text-center font-bold">{store}</p>
                    <p className="text-center text-xs -mt-1">{format(new Date(date), 'dd/MM/yyyy')}</p> 
                  </div>
                </div>
                {/* <Table data={purchases} columns={columns} /> */}
                <hr className="border-t-1 w-1/2 my-7 border-cyan-800 rounded-lg m-auto" />
              </div>
            ))}
          </>
        )}

      </div>
    </Container>
  )
}

export default HomePage;