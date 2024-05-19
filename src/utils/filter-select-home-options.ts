export const selectFilterHomeValues = {
    entredatas: "entredatas",
    porcartao: "porcartao",
    porloja: "porloja",
    porproduto: "porproduto"
}

export const selectHomeOptions: { label: string, value: string }[] = [
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
