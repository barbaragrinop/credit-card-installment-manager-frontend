import { Card } from "./credit-card";

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
    installmentsLeft: number
    installmentsPaid: number
    lastInstallmentDate: number
    card: Card
    cardId: number
    months: {
        jan: boolean | undefined
        fev: boolean | undefined
        mar: boolean | undefined
        abr: boolean | undefined
        mai: boolean | undefined
        jun: boolean | undefined
        jul: boolean | undefined
        ago: boolean | undefined
        set: boolean | undefined
        out: boolean | undefined
        nov: boolean | undefined
        dez: boolean | undefined
    }
}