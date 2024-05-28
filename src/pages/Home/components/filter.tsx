import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { selectFilterHomeValues, selectHomeOptions } from "@/utils/filter-select-home-options";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormFields = {
  filterType: string;
  dtInicio: string;
  dtFim: string;
  cartao: string;
  loja: string;
  produto: string;
};

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
  const [filterChosenOption, setFilterChosenOption] = useState<string>("");
  const { register } = useForm<FormFields>();

  const handleFilterChange = (e: any) => {
    setFilterChosenOption(e.value);
  };

  return (
    <form>
      <div className="flex items-center gap-4">
        <span className="font-bold">Filtro:</span>
        <div className="w-[200px]">
          <Field.Select
            register={register("filterType")}
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
          <Field.Date register={register("dtInicio")} name="dtInicio" id="dtInicio" label="Data Início" />
          <Field.Date register={register("dtFim")} name="dtFim" id="dtFim" label="Data Fim" />
        </Fieldset>
      )}
      {filterChosenOption === selectFilterHomeValues.porcartao && (
        <Fieldset legend="Insira o nome do cartão">
          <Field.Select
            register={register("cartao")}
            name="cartao"
            id="cartao"
            label="Nome do Cartão"
            options={[
              { label: "Cartão 1", value: "cartao1" },
              { label: "Cartão 2", value: "cartao2" },
            ]}
          />
        </Fieldset>
      )}
      {filterChosenOption === selectFilterHomeValues.porloja && (
        <Fieldset legend="Insira o nome da loja">
          <Field.Select
            register={register("loja")}
            name="loja"
            id="loja"
            label="Nome da loja"
            options={[
              { label: "Loja 1", value: "loja1" },
              { label: "Loja 2", value: "loja2" },
            ]}
          />
        </Fieldset>
      )}
      {filterChosenOption === selectFilterHomeValues.porproduto && (
        <Fieldset legend="Insira o nome do produto">
          <Field.Select
            register={register("produto")}
            name="produto"
            id="produto"
            label="Nome do Produto"
            options={[
              { label: "Produto 1", value: "produto1" },
              { label: "Produto 2", value: "produto2" },
            ]}
          />
        </Fieldset>
      )}
    </form>
  );
}
