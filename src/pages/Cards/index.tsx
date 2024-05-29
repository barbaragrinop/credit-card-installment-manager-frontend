import Container from "@/components/Container";
import Table from "@/components/Table";
import useSWR from 'swr';
import useBoolean from "@/hooks/useBoolean";

import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useAuth } from "@/context/useAuth";
import { useHttpConfig } from "@/hooks/useHttpConfig";
import { Card } from "@/types/credit-card";
import { useForm } from "react-hook-form";
import { useCardTableColumn } from "./hooks/cards-table-columns.hook";
import { useNotifier } from "@/hooks/useNotifier";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

type FieldValues = {
  name: string;
  dueDay: number;
  card_brand: string;
};

type CardSubmitData = {
  name: string;
  dueDay: number;
  cardBrand: string;
  userEmail: string;
  id?: number;  // 
}

function CardsPage() {
  const [editCardId, setEditCardId] = useState<number | null>(null)
  const [currentDeletedCard, setCurrentDeletedCard] = useState<Card | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm<FieldValues>();
  const { api, fetcher } = useHttpConfig();
  const { user } = useAuth();
  const { columns } = useCardTableColumn({ onEdit, onDelete })
  const { success, error } = useNotifier()
  const { data, mutate } = useSWR<Card[]>(`${import.meta.env.VITE_ENVIRONMENT}/card/get-cards-by-userId?userId=${user?.id}`, fetcher)
  const { isTrue: isOpen, isFalse: isClosed, currentValue } = useBoolean()

  async function submitForm(values: FieldValues) {
    try {
      const method = editCardId ? "PUT" : "POST"

      let data: CardSubmitData = {
        name: values.name,
        dueDay: values.dueDay,
        cardBrand: values.card_brand,
        userEmail: user!.email,
      }

      if (editCardId) {
        data = {
          ...data,
          id: editCardId
        }
      }

      await api({
        method,
        url: `${import.meta.env.VITE_ENVIRONMENT}/card`,
        data,
      });

      mutate()
      reset()
      success("Cartão cadastrado com sucesso!")
      setEditCardId(null)
    } catch (err) {
      console.error("err", err);
      error("Erro ao cadastrar cartão!")
    }
  }

  function onEdit(card: Card) {
    setEditCardId(card.id)
    setValue('name', card.name)
    setValue('dueDay', card.dueDay)
    setValue('card_brand', card.cardBrand)
  }

  function onDelete(card: Card) {
    isOpen()
    setCurrentDeletedCard(card)
  }

  async function deleteCard(){
    try {
      await api({
        method: "DELETE",
        url: `${import.meta.env.VITE_ENVIRONMENT}/card?id=${currentDeletedCard?.id}`,
      });

      mutate()
      success("Cartão deletado com sucesso!")
      isClosed()
      setCurrentDeletedCard(null)
    } catch (err) {
      console.error("err", err);
      error("Erro ao deletar cartão!")
    }
  }

  return (
    <Container pageName="Cartões">
      <div className="min-h-full flex flex-col rounded p-4">
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
            <Button.Primary type="button">Limpar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>
        <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
        {data && data.length > 0 && (
          <Table
            data={data}
            columns={columns}
          />
        )}

      </div>
      <Transition appear show={currentValue}>
        <Dialog as="div" className="relative  border-2" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white backdrop-blur-2xl shadow-xl border">
                  <DialogTitle as="h3" className="text-base/7 font-medium p-3 rounded-tr-xl rounded-tl-xl bg-cyan-800 text-white">
                    Confirmação
                  </DialogTitle>
                  <div className="px-4">
                    <p className="mt-2 text-sm/6  ">
                      Você está prestes e excluir o cartão <b>{currentDeletedCard?.name}.</b> <br /> Deseja continuar?
                    </p>
                    <div className="mt-4 flex justify-end gap-4 pb-3">
                      <Button.Primary onClick={() => isClosed()}>
                        Cancelar
                      </Button.Primary>
                      <Button.Secondary onClick={deleteCard}>
                        Deletar
                      </Button.Secondary>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Container>
  );
}

export default CardsPage;
