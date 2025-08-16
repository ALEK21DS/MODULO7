import { InventarioM } from "../model/InventarioM";

export const inventarioData: InventarioM = {
    id: "001",
    company: {
        ruc: "179228727001",
        name: "Fashion Trends",
        address: {
            city: "Quito",
            principalStreet: "Amaru-ñan",
            secondaryStreet: "Rumichaca-ñan",
            code: "N-40",
        },
    },
    sucursal: [
        {
            numero: '001',
            items: [
                {
                    id: 100,
                    product: {
                        id: 500,
                        name: "Falda",
                        category: {
                            id: 112,
                            name: "Ropa inferior"
                        },
                        price: 0.50,
                        description: "Falda de color azul"
                    },
                    quantity: 23,
                },
                {
                    id: 101,
                    product: {
                        id: 550,
                        name: "Vaqueros",
                        category: {
                            id: 112,
                            name: "Ropa inferior"
                        },
                        price: 0.50,
                        description: "vaquero de color negro"
                    },
                    quantity: 12,
                },
                {
                    id: 102,
                    product: {
                        id: 580,
                        name: "Camisas",
                        category: {
                            id: 112,
                            name: "Ropa superior"
                        },
                        price: 0.30,
                        description: "Camisa de color morado"
                    },
                    quantity: 18,
                },
                {
                    id: 103,
                    product: {
                        id: 600,
                        name: "Camiseta",
                        category: {
                            id: 112,
                            name: "Ropa superior"
                        },
                        price: 0.30,
                        description: "Camiseta de color negro"
                    },
                    quantity: 20,
                },
                {
                    id: 104,
                    product: {
                        id: 620,
                        name: "Zapatos",
                        category: {
                            id: 112,
                            name: "Calzado"
                        },
                        price: 0.30,
                        description: "Zapatos deportivos de color negro"
                    },
                    quantity: 20,
                }
            ],
        },
        {
            numero: '002',
            items: [
                {
                    id: 200,
                    product: {
                        id: 500,
                        name: "Jean",
                        category: {
                            id: 112,
                            name: "Ropa inferior"
                        },
                        price: 0.50,
                        description: "Jean de color azul"
                    },
                    quantity: 23,
                },
                {
                    id: 201,
                    product: {
                        id: 550,
                        name: "Cargo",
                        category: {
                            id: 112,
                            name: "Ropa inferior"
                        },
                        price: 0.50,
                        description: "Pantalon cargo de color negro"
                    },
                    quantity: 12,
                },
                {
                    id: 202,
                    product: {
                        id: 580,
                        name: "Blusa",
                        category: {
                            id: 112,
                            name: "Ropa superior"
                        },
                        price: 0.30,
                        description: "Blusa de color morado"
                    },
                    quantity: 18,
                },
                {
                    id: 203,
                    product: {
                        id: 600,
                        name: "Camiseta",
                        category: {
                            id: 112,
                            name: "Ropa superior"
                        },
                        price: 0.30,
                        description: "Camiseta de color negro"
                    },
                    quantity: 20,
                },
                {
                    id: 204,
                    product: {
                        id: 620,
                        name: "Zapatos",
                        category: {
                            id: 112,
                            name: "Calzado"
                        },
                        price: 0.30,
                        description: "Zapatos deportivos de color negro"
                    },
                    quantity: 20,
                }
            ],
        },
        {
            numero: '003',
            items: [
                {
                    id: 300,
                    product: {
                        id: 500,
                        name: "Jean",
                        category: {
                            id: 112,
                            name: "Ropa inferior"
                        },
                        price: 0.50,
                        description: "Jean de color azul"
                    },
                    quantity: 23,
                },
                {
                    id: 301,
                    product: {
                        id: 550,
                        name: "Cargo",
                        category: {
                            id: 112,
                            name: "Ropa inferior"
                        },
                        price: 0.50,
                        description: "Pantalon cargo de color negro"
                    },
                    quantity: 12,
                },
                {
                    id: 302,
                    product: {
                        id: 580,
                        name: "Blusa",
                        category: {
                            id: 112,
                            name: "Ropa superior"
                        },
                        price: 0.30,
                        description: "Blusa de color morado"
                    },
                    quantity: 18,
                },
                {
                    id: 303,
                    product: {
                        id: 600,
                        name: "Camiseta",
                        category: {
                            id: 112,
                            name: "Ropa superior"
                        },
                        price: 0.30,
                        description: "Camiseta de color negro"
                    },
                    quantity: 20,
                },
                {
                    id: 304,
                    product: {
                        id: 620,
                        name: "Zapatos",
                        category: {
                            id: 112,
                            name: "Calzado"
                        },
                        price: 0.30,
                        description: "Zapatos deportivos de color negro"
                    },
                    quantity: 20,
                }
            ],
        }

    ]

}