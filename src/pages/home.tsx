import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import Table from "@/components/Table";
import { Purchase } from "@/types/purchase";
import { purchasesMock } from "@/utils/mock-data";
import { useState } from "react";

function HomePage() {
  const [data, setData] = useState<Purchase[]>(purchasesMock);
  

  return (
    <Container pageName="Home" hScreen>
      <div className="h-full flex flex-col bg-gray-100 rounded p-4">
        <h1 className="text-3xl pb-12">
          Gerenciador de parcelas
        </h1>
        <form >
          <div className="grid grid-cols-4 gap-4">
            <Field.Text name="Loja" id="loja" label="Loja" />
            <Field.Text name="Product" id="product" label="Product" />
            <Field.Text name="Cartão" id="cartao" label="Cartão" />
            <Field.Text name="Qtd. Parcelas" id="qtdParcelas" label="Qtd. Parcelas" />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Cancelar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
        <div className="">
          <p>Nome do  produto</p>
          {
            data.map((item) => (
              <>
                <Table data={[item]} columns={[
                  {
                    accessorKey: 'produto',
                    header: 'Produto',
                    cell: (info: any) => info.getValue()

                  },
                  {
                    accessorKey: 'jan',
                    header: 'jan',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'fev',
                    header: 'fev',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'mar',
                    header: 'mar',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'abr',
                    header: 'abr',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'mai',
                    header: 'mai',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'jun',
                    header: 'jun',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'jul',
                    header: 'jul',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'ago',
                    header: 'ago',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'set',
                    header: 'set',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'out',
                    header: 'out',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'nov',
                    header: 'nov',
                    cell: ({ cell }) => {
                      return (
                        <div className="flex gap-4 items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  },
                  {
                    accessorKey: 'dez',
                    header: 'dez',
                    cell: ({ cell }) => {
                      return (
                        <div className="items-center justify-center">
                          <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                        </div>
                      )
                    }
                  }
                ]} />
                        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />

              </>

            ))
          }

          {/* <Table  />  */}
        </div>
        <Table data={data} columns={[
          {
            accessorKey: 'produto',
            header: 'Produto',
            cell: (info: any) => info.getValue()

          },
          {
            accessorKey: 'jan',
            header: 'jan',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'fev',
            header: 'fev',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'mar',
            header: 'mar',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'abr',
            header: 'abr',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'mai',
            header: 'mai',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'jun',
            header: 'jun',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'jul',
            header: 'jul',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'ago',
            header: 'ago',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'set',
            header: 'set',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'out',
            header: 'out',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'nov',
            header: 'nov',
            cell: ({ cell }) => {
              return (
                <div className="flex gap-4 items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          },
          {
            accessorKey: 'dez',
            header: 'dez',
            cell: ({ cell }) => {
              return (
                <div className="items-center justify-center">
                  <Field.Checkbox id="desc" checked={cell.getValue()} label="" name="desc" />
                </div>
              )
            }
          }
        ]} />
      </div>
    </Container>
  )
}

export default HomePage;