import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import Table from "@/components/Table";
import TableMonthColumn from "@/components/Table/components/table-month-column";
import {  Installment } from "@/types/purchase";
import { purchasesMock } from "@/utils/mock-data";
import { useState } from "react";

function HomePage() {
  const [data, setData] = useState<Installment[]>(purchasesMock);

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
              <Table data={[item]} columns={[
                {
                  accessorKey: 'jan',
                  header: 'jan',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'fev',
                  header: 'fev',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'mar',
                  header: 'mar',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'abr',
                  header: 'abr',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'mai',
                  header: 'mai',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'jun',
                  header: 'jun',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'jul',
                  header: 'jul',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'ago',
                  header: 'ago',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'set',
                  header: 'set',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'out',
                  header: 'out',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'nov',
                  header: 'nov',
                  cell: ({ cell }) => {
                    return (
                      <TableMonthColumn cell={cell} />
                    )
                  }
                },
                {
                  accessorKey: 'dez',
                  header: 'dez',
                  cell: ({ cell }) => {
                    return (
                      <div className="items-center justify-center" key={`${cell.id}-${cell.column}`} >
                        <Field.Checkbox id="desc" defaultChecked={cell.getValue()} label="" name="desc" />
                      </div>
                    )
                  }
                }
              ]} />
              <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />

            </div>
          ))
        }


      </div>
    </Container>
  )
}

export default HomePage;