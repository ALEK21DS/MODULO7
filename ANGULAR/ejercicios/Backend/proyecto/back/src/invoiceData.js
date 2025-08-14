export const invoiceData = {
    id: 'INV-001',
    company: {
        ruc: '1234567890',
        name: 'Tech Solutions',
        address: {
            city: 'San Francisco',
            principalStreet: '123 Tech Lane',
            secondaryStreet: 'Suite 100',
            code: '94105'
        }
    },
    customer: {
        id: '1724865671',
        name: 'Bryan',
        surname: 'Roura',
        address: {
            city: 'Los Angeles',
            principalStreet: '456 Elm Street',
            secondaryStreet: 'Canela',
            code: '90001'
        }
    },
    items: [
        {
            id: 1,
            product: {
                id: 1,
                name: 'Laptop',
                category: {
                    id: 1,
                    name: 'Electronics'
                },
                price: 1200,
                description: 'High-performance laptop'
            },
            quantity: 2
        },
        {
            id: 2,
            product: {
                id: 2,
                name: 'Mouse',
                category: {
                    id: 2,
                    name: 'Accessories'
                },
                price: 25,
                description: 'Wireless mouse'
            },
            quantity: 3
        }
    ]
};