// Json
const clientes = [
    {
        id:1,
        nombre: "José Manuel Acosta",
        fechaNacimiento: "1985-03-15",
        direcciones: [
            {
                pais: "España",
                ciudad: "Teror",
                direccionElegida: true
            },
            {
                pais: "España",
                ciudad: "Barcelona",
                direccionElegida: false
            }
        ],
        ordenes: [
            {
                producto: "Laptop",
                fechaOrden: "2025-01-10",
                precio: 1000,
                descuento: 0.15,
                precioFinal: 850,
                estado: "Entregado"
            },
            {
                producto: "Mouse",
                fechaOrden: "2025-01-20",
                precio: 50,
                descuento: 0.10,
                precioFinal: 45,
                estado: "Pendiente"
            }
        ]
    },

    {
        id:2,
        nombre: "Azael Reyes Martel",
        fechaNacimiento: "2004-08-19",
        direcciones: [
            {
                pais: "España",
                ciudad: "Vecindario",
                direccionElegida: true
            },
            {
                pais: "España",
                ciudad: "Teror",
                direccionElegida: false
            }
        ],
        ordenes: [
            {
                producto: "PC Gaming",
                fechaOrden: "2025-03-15",
                precio: 1250,
                descuento: 0.15,
                precioFinal: 1125,
                estado: "Entregado"
            },
            {
                producto: "Keyboard",
                fechaOrden: "2025-03-20",
                precio: 30,
                descuento: 0.10,
                precioFinal: 25,
                estado: "Pendiente"
            }
        ]
    }
]

let nombre_clientes = [];

clientes.forEach(

    cliente => nombre_clientes.push(cliente.nombre)

);

console.log("Cliente: "+nombre_clientes);