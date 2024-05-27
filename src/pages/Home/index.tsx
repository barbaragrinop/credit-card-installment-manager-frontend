import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import Table from "@/components/Table";
import { Installment } from "@/types/purchase";
import { selectFilterHomeValues, selectHomeOptions } from "@/utils/filter-select-home-options";
import { purchasesMock } from "@/utils/mock-data";
import { useState } from "react";
import { useHomeTableColumn } from "./hooks/table-column.hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from 'yup';
import InstallmentsFilter from "./components/filter";

type FormValues = {
  loja: string;
  product: string;
  cartao: string;
  qtdParcelas: number;
  dtCompra: string;
}

const validation = object<FormValues>().shape({
  loja: string().required("Campo obrigatório"),
  product: string().required("Campo obrigatório"),
  cartao: string().required("Campo obrigatório"),
  qtdParcelas: number().required("Campo obrigatório"),
  dtCompra: string().required("Campo obrigatório"),
})


function HomePage() {
  const { columns } = useHomeTableColumn();
  const [data, setData] = useState<Installment[]>(purchasesMock);
  const { handleSubmit,
    register,
    formState: {
      errors
    } } = useForm({
      resolver: yupResolver<FormValues>(validation),
      defaultValues: {
        loja: "",
        product: "",
        cartao: "",
        qtdParcelas: 0,
        dtCompra: "",
      }
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
            <Field.Text name="loja" id="loja" label="Loja" register={register("loja")} />
            <Field.Text name="product" id="product" label="Product" register={register("product")} />
            <Field.Text name="cartao" id="cartao" label="Cartão" register={register("cartao")} />
            <Field.Text name="qtdParcelas" id="qtdParcelas" label="Qtd. Parcelas" register={register("qtdParcelas")} />
            <Field.Date name="dtCompra" id="dtCompra" label="Data da compra" register={register("dtCompra")} />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Cancelar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
        <InstallmentsFilter />
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />


        {
          data.map((item, key) => (
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


      </div>
    </Container>
  )
}

export default HomePage;