import Container from "@/components/Container";
import Table from "@/components/Table";
import useSWR from 'swr';

import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useAuth } from "@/context/useAuth";
import { useHttpConfig } from "@/hooks/useHttpConfig";
import { Card } from "@/types/credit-card";
import { useForm } from "react-hook-form";
import { useCardTableColumn } from "./hooks/cards-table-columns.hook";
import { useNotifier } from "@/hooks/useNotifier";

type FieldValues = {
  name: string;
  dueDay: number;
  card_brand: string;
};

function CardsPage() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FieldValues>();
  
  const { api, fetcher } = useHttpConfig();
  const { user } = useAuth();
  const { columns } = useCardTableColumn()
  const { data, mutate } = useSWR<Card[]>(`${import.meta.env.VITE_ENVIRONMENT}/card/get-cards-by-userId?userId=${user?.id}`, fetcher)
  const { success, error } = useNotifier()

  async function submitForm(values: FieldValues) {
    console.log('user', user)
    try {
      await api({
        method: "POST",
        url: `${import.meta.env.VITE_ENVIRONMENT}/card`,
        data: {
          name: values.name,
          dueDay: values.dueDay,
          cardBrand: values.card_brand,
          userEmail: user!.email,
        },
      });
      
      mutate()
      reset()
      success("Cartão cadastrado com sucesso!")
    } catch (err) {
      console.error("err", err);
      error("Erro ao cadastrar cartão!")
    }
  }

  return (
    <Container pageName="Cartões">
      <div className="min-h-full flex flex-col bg-gray-100 rounded p-4">
        <h1 className="text-3xl pb-12">Cadastrar cartão</h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid grid-cols-3 gap-4">
            <Field.Text
              name="name"
              id="name"
              register={register("name")}
              label="Nome do cartão"
            />
            <Field.Number
              name="dueDay"
              id="dueDay"
              register={register("dueDay")}
              label="Dia do Vencimento"
            />
            <Field.Text
              name="card_brand"
              id="card_brand"
              register={register("card_brand")}
              label="Bandeira do Cartão"
            />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Limpar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
        {
          data && data.length > 0 && (
            <Table
              data={data}
              columns={columns}
            />
          )
        }

      </div>
    </Container>
  );
}

export default CardsPage;
