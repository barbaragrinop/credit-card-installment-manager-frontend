import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import Table from "@/components/Table";
import TableMonthColumn from "@/components/Table/components/table-month-column";
import { Installment } from "@/types/purchase";
import { selectHomeOptions } from "@/utils/filter-select-home-options";
import { purchasesMock } from "@/utils/mock-data";
import { useState } from "react";
import { useHomeTableColumn } from "./hooks/table-column.hook";

function HomePage() {
  const { columns } = useHomeTableColumn();
  const [data, setData] = useState<Installment[]>(purchasesMock);
  const [filterChosenOption, setFilterChosenOption] = useState<string>('');

  return (
    <Container pageName="Home" hScreen>
      <div className="min-h-full flex flex-col bg-gray-100 rounded p-4">
        <h1 className="text-3xl pb-12">
          Gerenciador de parcelas
        </h1>
        <form >
          <div className="grid grid-cols-3 gap-4">
            <Field.Text name="loja" id="loja" label="Loja" />
            <Field.Text name="product" id="product" label="Product" />
            <Field.Text name="cartao" id="cartao" label="Cartão" />
            <Field.Text name="qtdParcelas" id="qtdParcelas" label="Qtd. Parcelas" />
            <Field.Date name="dtCompra" id="dtCompra" label="Data da compra" />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Cancelar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
        <div className="flex items-center gap-4">
          <span className="font-bold">Filtro:</span>
          <div className="w-[200px]">
            <Field.Select
              id="select"
              label="Selecione o tipo"
              name="select"
              options={selectHomeOptions}
              onChange={(e) => {
                console.log('teste', e)

              }}
            />
          </div>
        </div>

        <hr className="border-t-1  my-7 border-cyan-800/[.55] m-auto rounded-lg text-center flex justify-center" />

        {
          data.map((item) => (
            <div key={item.id}>
              <div className="">
                <div className="">
                  <p className="text-center font-bold">{item.produto}</p>
                  <p className="text-center text-xs -mt-1">{item.cartao}</p>
                </div>
                btn.
              </div>
              <Table data={[item]} columns={columns} />
              <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />

            </div>
          ))
        }


      </div>
    </Container>
  )
}

export default HomePage;