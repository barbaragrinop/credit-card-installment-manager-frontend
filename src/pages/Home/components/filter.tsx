import { Button } from "@/components/Button";
import { CommonField } from "@/components/Field/common";
import { selectFilterHomeValues, selectHomeOptions } from "@/utils/filter-select-home-options";
import { useState } from "react";

type Props = {};

const Fieldset = ({
  legend,
  children,
}: {
  legend: string;
  children: React.ReactNode;
}) => (
  <fieldset className="border w-full flex gap-4 p-2">
    <legend className="p-2">{legend}</legend>
    {children}
    <Button.Primary>Aplicar</Button.Primary>
  </fieldset>
);

export default function InstallmentsFilter({}: Props) {
  const [filterChosenOption, setFilterChosenOption] = useState<number>();

  const handleFilterChange = (e: any) => {
    console.log('e', e)
    setFilterChosenOption(e.value);
  };

  return (
    <form>
      <div className="flex items-center gap-4">
        <span className="font-bold">Filtro:</span>
        <div className="w-[200px]">
          <CommonField.Select
            id="filterType"
            label="Selecione o tipo"
            name="filterType"
            options={selectHomeOptions}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      {filterChosenOption === selectFilterHomeValues.entredatas && (
        <Fieldset legend="Insira a data de início e a data fim">
          <CommonField.Date  name="dtInicio" id="dtInicio" label="Data Início" />
          <CommonField.Date  name="dtFim" id="dtFim" label="Data Fim" />
        </Fieldset>
      )}
      {filterChosenOption === selectFilterHomeValues.porcartao && (
        <Fieldset legend="Insira o nome do cartão">
          <CommonField.Select
            
            name="cartao"
            id="cartao"
            label="Nome do Cartão"
            options={[
              { label: "Cartão 1", value: 1 },
              { label: "Cartão 2", value: 2 },
            ]}
          />
        </Fieldset>
      )}
      {filterChosenOption === selectFilterHomeValues.porloja && (
        <Fieldset legend="Insira o nome da loja">
          <CommonField.Select
            
            name="loja"
            id="loja"
            label="Nome da loja"
            options={[
              { label: "Loja 1", value: 2 },
              { label: "Loja 2", value: 1 },
            ]}
          />
        </Fieldset>
      )}
      {filterChosenOption === selectFilterHomeValues.porproduto && (
        <Fieldset legend="Insira o nome do produto">
          <CommonField.Select
            
            name="produto"
            id="produto"
            label="Nome do Produto"
            options={[
              { label: "Produto 1", value: 1 },
              { label: "Produto 2", value: 2 },
            ]}
          />
        </Fieldset>
      )}
    </form>
  );
}
