import InstallmentsFilter from "./components/filter";
import Container from "@/components/Container";
import Table from "@/components/Table";
import useSWR from "swr";

import { Button } from "@/components/Button";
import { Field } from "@/components/Field";
import { useHomeTableColumn } from "./hooks/use-table-column.hook";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from 'yup';
import { useAuth } from "@/context/useAuth";
import { useHttpConfig } from "@/hooks/useHttpConfig";
import { Card } from "@/types/credit-card";
import { SelectProp } from "@/types/select";
import { useState } from "react";
import { useNotifier } from "@/hooks/useNotifier";
import { Purchase } from "@/types/purchase";
import { format } from "date-fns";
import { IoMdEye } from "react-icons/io";
import { BiEdit, BiFolderOpen, BiTrash } from "react-icons/bi";
import useBoolean from "@/hooks/useBoolean";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";

type FormValues = {
  loja: string;
  product: string;
  cartao: SelectProp;
  qtdParcelas: number;
  dtCompra: string;
  vlCompra: number;
}

const validation = object<FormValues>().shape({
  loja: string().required("Campo obrigatório"),
  product: string().required("Campo obrigatório"),
  cartao: object().shape({
    label: string().required("Campo obrigatório"),
    value: number().required("Campo obrigatório")
  }).required("Campo obrigatório"),

  qtdParcelas: number().required("Campo obrigatório").min(1, "Mínimo de 1 parcela"),
  dtCompra: string().required("Campo obrigatório"),
  vlCompra: number().required("Campo obrigatório").min(0.1, "Valor mínimo de 0.1"),
})


function HomePage() {
  const [editPurchaseId, setEditPurchaseId] = useState<number | null>(null)
  const [currentPurchase, setCurrentPurchase] = useState<Purchase>({} as Purchase)


  const { success } = useNotifier()
  const { columns } = useHomeTableColumn();
  const { user } = useAuth()
  const { api, fetcher } = useHttpConfig()
  const { data: purchases, mutate, isLoading } = useSWR<Purchase[]>(`${import.meta.env.VITE_ENVIRONMENT}/purchase/get-purchases-by-userId?userId=${user?.id}`, fetcher)
  const { data: cards } = useSWR<Card[]>(`${import.meta.env.VITE_ENVIRONMENT}/card/get-cards-by-userId?userId=${user?.id}`, fetcher)
  const { isTrue: isOpen, isFalse: isClosed, currentValue } = useBoolean()


  const { handleSubmit, control, reset, setValue } = useForm({
    resolver: yupResolver<FormValues>(validation),
    defaultValues: {
      loja: "",
      product: "",
      cartao: undefined,
      qtdParcelas: 0,
      dtCompra: "",
      vlCompra: 0
    },
    mode: "all"
  });

  async function submitForm(values: FormValues) {
    try {
      const method = editPurchaseId ? "PUT" : "POST"

      let data: any = {
        store: values.loja,
        productName: values.product,
        cardId: values.cartao.value,
        installments: values.qtdParcelas,
        date: values.dtCompra,
        userId: user!.id,
        value: values.vlCompra
      }

      if (editPurchaseId) {
        data = {
          ...data,
          id: editPurchaseId
        }
      }

      await api({
        method,
        url: `${import.meta.env.VITE_ENVIRONMENT}/purchase`,
        data,
      });

      mutate()
      reset()
      success("Compra cadastrada com sucesso")
    } catch (err: any) {
      success("Erro ao cadastrar compra")
      console.log(err)
    }
  }

  function onEdit(purchase: Purchase) {
    setValue('loja', purchase.store)
    setValue('product', purchase.productName)
    setValue('cartao', { label: purchase.card?.name, value: purchase.cardId })
    setValue('qtdParcelas', purchase.installments)
    setValue('dtCompra', format(new Date(purchase.date), 'yyyy-MM-dd'))
    setValue('vlCompra', purchase.value)
    setEditPurchaseId(purchase.id)
  }

  return (
    <Container pageName="Home">
      <div className="min-h-full flex flex-col bg-gray-100 rounded p-4">
        <h1 className="text-3xl pb-12">
          Gerenciador de parcelas
        </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="grid grid-cols-3 gap-4">
            <Field.Text name="loja" id="loja" label="Loja" control={control} />
            <Field.Text name="product" id="product" label="Product" control={control} />
            <Field.Select options={cards?.map((x: Card) => ({ label: x.name, value: x.id })) || []} name="cartao" id="cartao" label="Cartão" control={control} />
            <Field.Number step="0.01" name="vlCompra" id="vlCompra" label="Valor total" control={control} />
            <Field.Number name="qtdParcelas" id="qtdParcelas" label="Qtd. Parcelas" control={control} />
            <Field.Date name="dtCompra" id="dtCompra" label="Data da compra" control={control} />
          </div>
          <div className="flex gap-4 justify-end pt-6">
            <Button.Primary>Cancelar</Button.Primary>
            <Button.Primary type="submit">Salvar</Button.Primary>
          </div>
        </form>

        {purchases && purchases?.length > 0 && (<>
          <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
          <InstallmentsFilter />
          <hr className="border-t-4 w-full my-7 border-cyan-800 rounded-lg" />
          {purchases?.map((purchase: Purchase, key: any) => (
            <div key={key}>
              <div className="flex flex-col justify-center items-center gap-3">
                <p className="text-center font-bold text-xl -mb-3">{purchase.productName} ({purchase.store})</p>
                <p className="text-center text-sm">Dt. Compra: {format(new Date(purchase.date), 'dd/MM/yyyy')}</p>
                <p className="text-center">{purchase.installmentsPaid} / {purchase.installments} parcelas</p>
                <div className="flex gap-3">
                  <div className="border border-cyan-800 p-1 h-9 w-9 flex items-center justify-center cursor-pointer rounded-md group hover:bg-cyan-900"
                    onClick={() => {
                      setCurrentPurchase(purchase)
                      isOpen()
                    }}>
                    <IoMdEye className="text-center text-2xl text-cyan-800 group-hover:text-white " />
                  </div>
                  <div className="border border-cyan-800 p-1 h-9 w-9 flex items-center justify-center cursor-pointer rounded-md group hover:bg-cyan-900"
                    onClick={() => {
                      onEdit(purchase)
                    }}>
                    <BiEdit className="text-center text-2xl text-cyan-800 group-hover:text-white " />
                  </div>
                  <div className="border border-cyan-800 p-1 h-9 w-9 flex items-center justify-center cursor-pointer rounded-md group hover:bg-cyan-900">
                    <BiTrash className="text-center text-2xl text-cyan-800 group-hover:text-white " />
                  </div>
                </div>
              </div>
              <Table data={[purchase]} columns={columns} />
              <hr className="border-t-1 w-1/2 my-7 border-cyan-800 rounded-lg m-auto" />
            </div>
          ))}
        </>)}
      </div>
      <Transition appear show={currentValue}>
        <Dialog as="div" className="relative" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4  ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-white backdrop-blur-2xl shadow-2xl overflow-hidden ">

                  <DialogTitle as="h3" className="text-base/7 font-medium p-3 bg-cyan-800/80 text-white">
                    <b>{currentPurchase?.productName}</b> - {currentPurchase?.store}
                  </DialogTitle>

                  <div className="px-4">
                    <p className="mt-2 text-sm/6">
                      <strong>Dt. compra:</strong>  {currentPurchase?.date && format(new Date(currentPurchase?.date), 'dd/MM/yyyy')}
                    </p>
                    <p className="mt-2 text-sm/6">
                      <strong>Valor total:</strong> R${currentPurchase?.value}
                    </p>
                    <p className="mt-2 text-sm/6">
                      <strong>Parcelas:</strong> {currentPurchase?.installments}x de R${currentPurchase?.valuePerInstallment}
                    </p>
                    <p className="mt-2 text-sm/6">
                      <strong>Cartão:</strong> {currentPurchase?.card?.name} (vence dia {currentPurchase?.card?.dueDay})
                    </p>
                    <p className="mt-2 text-sm/6">
                      <strong>Parcelas pagas: </strong> {currentPurchase?.installmentsPaid} / {currentPurchase?.installments}
                    </p>
                    <p className="mt-2 text-sm/6">
                      <strong>Última parcela: </strong> {currentPurchase?.lastInstallmentDate && format(new Date(currentPurchase?.lastInstallmentDate), 'dd/MM/yyyy')}
                    </p>
                    <div className="mt-4 flex justify-end gap-4 pb-3">
                      <Button.Primary onClick={isClosed}>
                        Cancelar
                      </Button.Primary>

                    </div>
                  </div>

                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Container>
  )
}

export default HomePage;