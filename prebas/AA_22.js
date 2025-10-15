const clientes = [

    {
        id: 1,
        nombre: "Azael",
        fechaNac: "2015-10-15",
        direcciones: [
            {
                pais: "España",
                ciudad: "Vecindario",
                direccionElegida: true
            },
            {
                pais: "Francia",
                ciudad: "London",
                direccionElegida: false
            }
        ],
        ordenes: [
            {
                producto: "PC Gaming",
                fechaOrden: "2025-10-10",
                precio: 850,
                descuento: 0,
                precioFinal: 0,
                estado: "Entregado"
            },
            {
                producto: "Teclado Gaming",
                fechaOrden: "2025-09-09",
                precio: 15,
                descuento: 0,
                precioFinal: 0,
                estado: "Pendiente"
            }
        ]
    },
    {
        id: 2,
        nombre: "Josu",
        fechaNac: "2009-05-20",
        direcciones: [
            {
                pais: "España",
                ciudad: "Arinaga",
                direccionElegida: false
            },
            {
                pais: "Francia",
                ciudad: "London",
                direccionElegida: true
            }
        ],
        ordenes: [
            {
                producto: "PC Gaming",
                fechaOrden: "2025-10-10",
                precio: 1850,
                descuento: 0,
                precioFinal: 0,
                estado: "Pendiente"
            },
            {
                producto: "Teclado Gaming",
                fechaOrden: "2025-09-09",
                precio: 150,
                descuento: 0,
                precioFinal: 0,
                estado: "Enviado"
            }
        ]
    },
    {
        id: 3,
        nombre: "Pauli",
        fechaNac: "1970-11-01",
        direcciones: [
            {
                pais: "España",
                ciudad: "Madrid",
                direccionElegida: false
            },
            {
                pais: "Australia",
                ciudad: "ArañasEveryWhere",
                direccionElegida: true
            }
        ],
        ordenes: [
            {
                producto: "PC Gaming",
                fechaOrden: "2025-10-10",
                precio: 1350,
                descuento: 0,
                precioFinal: 0,
                estado: "Enviado"
            },
            {
                producto: "Teclado Gaming",
                fechaOrden: "2025-09-09",
                precio: 35,
                descuento: 0,
                precioFinal: 0,
                estado: "Entregado"
            }
        ]
    }
]

let fechaAct = new Date().getFullYear();
let edades = [];
let esSuCumple = [];
let totalCompras= [];

clientes.forEach(cliente => {

    let fecha = new Date(cliente.fechaNac).getFullYear();
    let edad = fechaAct - fecha;
    edades.push(edad);

    if (new Date(cliente.fechaNac).getMonth() === new Date().getMonth() && new Date(cliente.fechaNac).getDate() === new Date().getDate()){
        esSuCumple.push(true);
    } else {
        esSuCumple.push(false);
    }
});

clientes.forEach((cliente, i) => {
    cliente.ordenes.forEach(orden => {
        let edad = edades[i];

        if (edad < 12) {
            orden.descuento = 0.40;
        } else if (edad >= 13 && edad <= 18) {
            orden.descuento = 0.15;
        } else if (edad >= 65) {
            orden.descuento = 0.25;
        } else {
            orden.descuento = 0;
        }

        if (esSuCumple[i]) {
            orden.descuento = orden.descuento + 0.10;
        }

        orden.precioFinal = orden.precio - (orden.precio * orden.descuento);

        console.log(`Nombre: ${cliente.nombre}
Producto: ${orden.producto}
Descuento: ${orden.descuento}
Precio Final: ${orden.precioFinal}`)
    });
});


clientes.forEach((cliente, i) => {
    let sumaCompras = 0;
    cliente.ordenes.forEach(orden => {
        
        sumaCompras = sumaCompras + orden.precioFinal;
        

    });
    totalCompras.push(sumaCompras);
});

let nombres = [];

clientes.forEach(cliente => {
    
    nombres.push(cliente.nombre);

});

let ctx = document.getElementById('ventasChart');

// Crear el gráfico de barras
let ventasChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nombres, // Meses
        datasets: [{
            label: 'Ventas', // Etiqueta del conjunto de datos
            data: totalCompras, // Valores de ventas
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Asegura que el eje Y comience en 0
            }
        }
    }
});