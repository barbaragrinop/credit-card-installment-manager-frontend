import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import Table from "@/components/Table";

function HomePage() {
  return (
    <Container pageName="Home">
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
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg"/>
        <Table />
      </div>
    </Container>
  )
}

export default HomePage;