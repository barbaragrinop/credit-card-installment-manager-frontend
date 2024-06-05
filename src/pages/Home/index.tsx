import InstallmentsFilter from "./components/filter";
import Container from "@/components/Container";
import Table from "@/components/Table";

import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useHomeTableColumn } from "./hooks/table-column.hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from 'yup';
import useSWR from "swr";
import { useAuth } from "@/context/useAuth";
import { useHttpConfig } from "@/hooks/useHttpConfig";
import { Card } from "@/types/credit-card";
import { SelectProp } from "@/types/select";

type FormValues = {
  loja: string;
  product: string;
  cartao: SelectProp;
  qtdParcelas: number;
  dtCompra: string;
}

const validation = object<FormValues>().shape({
  loja: string().required("Campo obrigatório"),
  product: string().required("Campo obrigatório"),
  cartao:  object().shape({
    label: string().required("Campo obrigatório"),
    value: number().required("Campo obrigatório")
  }),
  qtdParcelas: number().required("Campo obrigatório"),
  dtCompra: string().required("Campo obrigatório"),
})


function HomePage() {
  const { columns } = useHomeTableColumn();
  const { user } = useAuth()
  const { fetcher } = useHttpConfig()
  const { data } = useSWR<Card[]>(`${import.meta.env.VITE_ENVIRONMENT}/card/get-cards-by-userId?userId=${user?.id}`, fetcher)

  const { handleSubmit, getValues, formState: {
    errors
  }, control } = useForm({

    resolver: yupResolver<FormValues>(validation),
    defaultValues: {
      loja: "",
      product: "",
      cartao: {
        label: "",
        value: 0
      },
      qtdParcelas: 0,
      dtCompra: "",
    },
    mode: "all"
  });

  function submitForm(values: FormValues) {
    console.log(values)
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
            <Field.Select options={data?.map((x) => ({ label: x.name, value: x.id })) || []}
              name="cartao" id="cartao" label="Cartão" control={control} />
            <Field.Text name="qtdParcelas" id="qtdParcelas" label="Qtd. Parcelas" control={control} />
            <Field.Date name="dtCompra" id="dtCompra" label="Data da compra" control={control} />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Cancelar</Button.Primary>
            <Button.Primary type="submit" onClick={() => {
              console.log("asdsad", getValues())
              console.log("asdsad", errors)
            }}>Salvar</Button.Primary>
          </div>
        </form>

        {data && data.length > 0 && (
          <>
            <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
            <InstallmentsFilter />
            <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
            {
              data.map((item: any, key: any) => (
                <div key={key}>
                  <div className="">
                    <div className="">
                      <p className="text-center font-bold">{item.produto}</p>
                      <p className="text-center text-xs -mt-1">{item.cartao}</p>
                    </div>
                  </div>
                  <Table data={[item]} columns={columns} />
                  <hr className="border-t-1 w-1/2 my-7 border-cyan-800 rounded-lg m-auto" />

                </div>
              ))
            }
          </>
        )

        }


      </div>
    </Container>
  )
}

export default HomePage;