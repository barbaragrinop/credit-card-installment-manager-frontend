import { Button } from "@/components/Button"
import Container from "@/components/Container"
import { Field } from "@/components/Field"
import Table from "@/components/Table"
import { CreditCard } from "@/types/credit-card"
import { format } from "date-fns"
import { BiEdit, BiTrash } from "react-icons/bi"

const data: CreditCard[] = [
  {
    id: 1,
    name: 'Cartão 1',
    dtVencimento: format(new Date(), 'dd/MM/yyyy')
  },
  {
    id: 2,
    name: 'Cartão 2',
    dtVencimento: format(new Date(), 'dd/MM/yyyy'),
  },
  {
    id: 3,
    name: 'Cartão 3',
    dtVencimento: format(new Date(), 'dd/MM/yyyy'),
  },
  {
    id: 4,
    name: 'Cartão 4',
    dtVencimento: format(new Date(), 'dd/MM/yyyy'),
  },
  {
    id: 5,
    name: 'Cartão 5',
    dtVencimento: format(new Date(), 'dd/MM/yyyy'),
  },

]

function CartoesPage() {
  return (
    <Container pageName="Cartões" hScreen>
      <div className="min-h-full flex flex-col bg-gray-100 rounded p-4">
        <h1 className="text-3xl pb-12">
          Cadastrar cartão
        </h1>
        <form >
          <div className="grid grid-cols-2 gap-4">
            <Field.Text name="nomeCartao" id="nomeCartao" label="Nome do cartão" />
            <Field.Date name="dtVencimento" id="dtVencimento" label="Data devencimento" />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Limpar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
        <Table
          data={data}
          columns={[
            {
              header: 'Nome',
              accessorKey: 'name'
            },
            {
              header: 'Data de vencimento',
              accessorKey: 'dtVencimento'
            },
            {
              header: 'Ações',
              accessorKey: 'actions',
              cell: () => {
                return (
                  <div className="flex gap-4 justify-center">
                    <BiTrash className="border text-3xl p-1 rounded bg-cyan-800 cursor-pointer text-white" />
                    <BiEdit className="border text-3xl p-1 rounded bg-cyan-800 cursor-pointer text-white" />
                  </div>
                )
              }
            }
          ]}
        />
      </div>
    </Container>
  )
}

export default CartoesPage