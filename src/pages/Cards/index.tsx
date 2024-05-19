import { Button } from "@/components/Button"
import Container from "@/components/Container"
import { Field } from "@/components/Field"

function CartoesPage() {
  return (
    <Container pageName="Cartões" hScreen>
    <div className="min-h-full flex flex-col bg-gray-100 rounded p-4">
      <h1 className="text-3xl pb-12">
        Cadastrar cartão
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

    </div>
  </Container>
  )
}

export default CartoesPage