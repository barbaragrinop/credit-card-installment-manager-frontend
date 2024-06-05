
export type Installment = {
    id: number;
    loja: string;
    produto: string;
    valor: number;
    parcelas: number;
    cartao: string; 
    dtCompra: Date;
    jan: InstallmentDetails;
    fev: InstallmentDetails;
    mar: InstallmentDetails;
    abr: InstallmentDetails;
    mai: InstallmentDetails;
    jun: InstallmentDetails;
    jul: InstallmentDetails;
    ago: InstallmentDetails;
    set: InstallmentDetails;
    out: InstallmentDetails;
    nov: InstallmentDetails;
    dez: InstallmentDetails;
}

type InstallmentDetails = {
    status: 'PAGO' | 'PENDENTE';
}

export type Purchase = {
    id: number
    date: string,
    installments: number,
    store: string,
    value: number
    productName: string
}