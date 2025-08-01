import { InvoiceM } from "../model/InvoiceM";

export const invoiceData:InvoiceM = {
    id: "001",
    company: {
        ruc: "179228727001",
        name: "Clear Minds Consultores",
        address: {
            city: "Quito",
            principalStreet: "Juan Pablo Sanz",
            secondaryStreet: "Inaquito",
            code: "N-57",
        },
    },
    customer: {
        id: "1713295853",
        name: "Leonardo",
        surname: "Pesantez",
        address: {
            city: "Quito",
            principalStreet: "Amarunan",
            secondaryStreet: "Calle C",
            code: "N-79",

        }
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: "Papas Rufles",
                category: {
                    id:112,
                    name:"Snack"
                },
                price: 0.50,
                description: "Las papas mas sabrosonas"
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: "Doritos",
                category: {
                    id:112,
                    name:"Snack"
                },
                price: 0.50,
                description: "De queso"
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: 580,
                name: "Kchitos",
                category: {
                    id:112,
                    name:"Snack"
                },
                price: 0.30,
                description: "Para Kchudos"
            },
            quantity: 100,
        }
    ],
}