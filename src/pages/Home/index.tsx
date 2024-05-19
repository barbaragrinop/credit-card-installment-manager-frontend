import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { Field } from "@/components/Field";
import Table from "@/components/Table";
import { Installment } from "@/types/purchase";
import { selectFilterHomeValues, selectHomeOptions } from "@/utils/filter-select-home-options";
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
        <>
          <div className="flex items-center gap-4 " >
            <span className="font-bold">Filtro:</span>
            <div className="w-[200px]">
              <Field.Select
                id="select"
                label="Selecione o tipo"
                name="select"
                options={selectHomeOptions}
                onChange={(e: any) => {
                  setFilterChosenOption(e.value);
                }}
              />
            </div>
          </div>
          {
            filterChosenOption === selectFilterHomeValues.entredatas ? (
              <fieldset className="border w-full flex gap-4 p-2">
                <legend className="p-2">Insira a <strong>data de início</strong> e a <strong>data fim</strong></legend>

                <Field.Date name="dtInicio" id="dtInicio" label="Data Início" />
                <Field.Date name="dtFim" id="dtFim" label="Data Fim" />
                <Button.Primary>
                  Aplicar
                </Button.Primary>
              </fieldset>
            ) : filterChosenOption === selectFilterHomeValues.porcartao ? (
              <fieldset className="border w-full flex gap-4 p-2">
                <legend className="p-2">Insira o <strong>nome do cartão</strong></legend>

                <Field.Select name="cartao" id="cartao" label="Nome do Cartão" options={[{ label: "Cartão 1", value: "cartao1" }, { label: "Cartão 2", value: "cartao2" }]} />
                <Button.Primary>
                  Aplicar
                </Button.Primary>
              </fieldset>
            ) : filterChosenOption === selectFilterHomeValues.porloja ? (
              <fieldset className="border w-full flex gap-4 p-2">
                <legend className="p-2">Insira o <strong>nome da loja</strong></legend>

                <Field.Select name="loja" id="loja" label="Nome da loja" options={[{ label: "Loja 1", value: "loja1" }, { label: "Loja 2", value: "loja2" }]} />
                <Button.Primary>
                  Aplicar
                </Button.Primary>
              </fieldset>
            ) : filterChosenOption === selectFilterHomeValues.porproduto ? (
              <fieldset className="border w-full flex gap-4 p-2">
                <legend className="p-2">Insira o <strong>nome do produto</strong></legend>

                <Field.Select name="produto" id="produto" label="Nome do Produto" options={[{ label: "Produto 1", value: "produto1" }, { label: "Produto 2", value: "produto2" }]} />
                <Button.Primary>
                  Aplicar
                </Button.Primary>
              </fieldset>
            ) : null
          }
        </>

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