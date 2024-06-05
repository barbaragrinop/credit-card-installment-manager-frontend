import { SelectProp } from "@/types/select"

export const selectFilterHomeValues = {
    entredatas: 0,
    porcartao: 1,
    porloja: 2,
    porproduto: 3
}

export const selectHomeOptions: SelectProp[] = [
    {
        label: "Entre datas",
        value: selectFilterHomeValues.entredatas
    },
    {
        label: "Por cartão",
        value: selectFilterHomeValues.porcartao
    },
    {
        label: "Por loja",
        value: selectFilterHomeValues.porloja
    },
    {
        label: "Por produto",
        value: selectFilterHomeValues.porproduto
    }
]
