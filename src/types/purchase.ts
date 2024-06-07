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

type MonthDetails = {
    isPaid: boolean,
    payDay: string | null,
    installmentNumber: number
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
    valueLeft: number
    valuePaid: number
    valuePerInstallment: number
    lastInstallmentDate: string
    card: Card
    cardId: number
    months: {
        jan?: MonthDetails
        feb?: MonthDetails
        mar?: MonthDetails
        apr?: MonthDetails
        may?: MonthDetails
        jun?: MonthDetails
        jul?: MonthDetails
        aug?: MonthDetails
        sep?: MonthDetails
        oct?: MonthDetails
        nov?: MonthDetails
        dec?: MonthDetails
    }
}


