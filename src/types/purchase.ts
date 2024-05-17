
export type Purchase = {
    id: number;
    loja: string;
    produto: string;
    valor: number;
    parcelas: number;
    cartao: string; 
    dtCompra: Date;
    jan: boolean;
    fev: boolean;
    mar: boolean;
    abr: boolean;
    mai: boolean;
    jun: boolean;
    jul: boolean;
    ago: boolean;
    set: boolean;
    out: boolean;
    nov: boolean;
    dez: boolean;
}