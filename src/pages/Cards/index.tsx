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
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

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
  // const { currentValue, isFalse, isTrue } = useBoolean()
  let [isOpen, setIsOpen] = useState(false)

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

  async function onDelete(card: Card) {

    setIsOpen(true)
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
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
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
                <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                    Payment successful
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">
                    Your payment has been successfully submitted. We’ve sent you an email with all of the details of
                    your order.
                  </p>
                  <div className="mt-4">
                    <Button.Primary
                      // className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={close}
                    >
                      Got it, thanks!
                    </Button.Primary>
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
