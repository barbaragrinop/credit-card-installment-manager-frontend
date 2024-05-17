import { Purchase } from "@/types/purchase";
import { User } from "@/types/user";

export const userMock: User = {
    id: 1,
    firstName: 'Barbara',
    lastName: 'Hellen',
    age: 23,
    isActive: true,
}

export const purchasesMock: Purchase[] = [
    {
        id: 1,
        valor: 1000.00,
        cartao: 'Azul Internacional Visa',
        dtCompra: new Date('2021-09-01'),
        loja: 'Amazon', 
        parcelas: 10, 
        produto: 'Garrafa térmica', 
        jan: true,
        fev: false,
        mar: true,
        abr: false,
        mai: true,
        jun: true,
        jul: true,
        ago: false,
        set: true,
        out: true,
        nov: true,
        dez: true
        
    },
    {
        id: 2,
        valor: 1500.00,
        cartao: 'Bradesco X Visa',
        dtCompra: new Date('2022-09-01'),
        loja: 'Amazon', 
        parcelas: 10, 
        produto: 'Kindle', 
        jan: true,
        fev: true,
        mar: true,
        abr: true,
        mai: true,
        jun: true,
        jul: true,
        ago: false,
        set: false,
        out: false,
        nov: false,
        dez: false
    },
    {
        id: 3,
        valor: 20.00,
        cartao: 'Bradesco X Visa',
        dtCompra: new Date('2021-09-01'),
        loja: 'Shopee', 
        parcelas: 2, 
        produto: 'Pijama', 
        jan: true,
        fev: true,
        mar: true,
        abr: true,
        mai: true,
        jun: true,
        jul: true,
        ago: false,
        set: false,
        out: false,
        nov: false,
        dez: false
    }
]