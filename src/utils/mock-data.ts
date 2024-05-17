import { Installment } from "@/types/purchase";
import { User } from "@/types/user";

export const userMock: User = {
    id: 1,
    firstName: 'Barbara',
    lastName: 'Hellen',
    age: 23,
    isActive: true,
}



export const purchasesMock: Installment[] = [
    {
        id: 1,
        valor: 1000.00,
        cartao: 'Azul Internacional Visa',
        dtCompra: new Date('2021-09-01'),
        loja: 'Amazon',
        parcelas: 10,
        produto: 'Garrafa térmica',
        jan: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        fev: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        mar: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        abr: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        mai: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        jun: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        jul: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        ago: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        set: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        out: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        nov: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        dez: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        }
    },
    {
        id: 2,
        valor: 1500.00,
        cartao: 'Bradesco X Visa',
        dtCompra: new Date('2022-09-01'),
        loja: 'Amazon',
        parcelas: 10,
        produto: 'Kindle',
        jan: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        fev: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        mar: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        abr: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        mai: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        jun: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        jul: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        ago: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        set: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        out: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        nov: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        dez: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        }
    },
    {
        id: 3,
        valor: 20.00,
        cartao: 'Bradesco X Visa',
        dtCompra: new Date('2021-09-01'),
        loja: 'Shopee',
        parcelas: 2,
        produto: 'Pijama',
        jan: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        fev: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        mar: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        abr: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        mai: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        jun: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        jul: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        ago: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        set: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        out: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        nov: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        },
        dez: {
            dtPagamento: new Date('2022-01-01'),
            valorPago: 100.00
        }
    }
]