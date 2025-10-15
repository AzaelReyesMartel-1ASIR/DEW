// Json de clientes
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
    },
    {
        id:3,
        nombre: "Cumpleañero Yeray",
        fechaNacimiento: "1989-10-06",
        direcciones: [
            {
                pais: "España",
                ciudad: "Teror",
                direccionElegida: false
            },
            {
                pais: "España",
                ciudad: "Barcelona",
                direccionElegida: true
            }
        ],
        ordenes: [
            {
                producto: "Laptop",
                fechaOrden: "2025-01-10",
                precio: 1000,
                descuento: 0.15,
                precioFinal: 850,
                estado: "Pendiente"
            },
            {
                producto: "Mouse",
                fechaOrden: "2025-01-20",
                precio: 50,
                descuento: 0.10,
                precioFinal: 45,
                estado: "Entregado"
            }
        ]
    }
]

// Creamos array vacío para los nombres

let nombre_clientes = [];

// Bucle para introducir nombres a array
clientes.forEach(

    cliente => nombre_clientes.push(cliente.nombre)

);

// array fechas vacio
let fechas = [];

console.log(nombre_clientes);

// Bucle recorre clientes y mete a array fechas convertidas a Date
for(let i = 0; i< clientes.length; i++){
    fechas.push(new Date(clientes[i].fechaNacimiento));
}

//clientes.forEach(

  //  cliente => fechas.push(new Date(cliente.fechaNacimiento))

//

// Variables anio actual
let anioActual = new Date();

// array para guardar las edades
let edades = [];
let descuento;
let descuento_adicional = 0.10;

// Bucle for para recorrer cada cliente
for (let i = 0; i < clientes.length; i++) {

    // Calculamos la edad
    let edad = anioActual.getFullYear() - fechas[i].getFullYear();

    // Guardamos la edad en el array
    edades.push(edad);

    // Comprobamos si hoy es su cumpleaños
    let esCumple = (anioActual.getMonth() === fechas[i].getMonth() && anioActual.getDate() === fechas[i].getDate());

    // Bucle for para recorrer array ordenes
    for (let j = 0; j < clientes[i].ordenes.length; j++) {

        // Precio sin descuento
        let precioBase = clientes[i].ordenes[j].precio;

        // Condicional para aplicar descuentos por edad
        if (edad < 12) {
            descuento = 0.40;
        } else if (edad >= 13 && edad <= 18) {
            descuento = 0.15;
        } else if (edad >= 65) {
            descuento = 0.25;
        } else {
            descuento = 0;
        }

        // Comprobamos si es su cumple, y lo sumamos al descuento
        if (esCumple) {
            descuento = descuento + descuento_adicional;
        }

        // calculamos precio final
        let precioFinal = precioBase * (1 - descuento);

        // guardamos los resultados en la orden
        clientes[i].ordenes[j].precioFinal = precioFinal;
        clientes[i].ordenes[j].descuento = descuento;
    }
}

// array totalCompras
let totalCompras = [];

for (let i = 0; i < clientes.length; i++) {
    let totalCliente = 0;
    for (let j = 0; j < clientes[i].ordenes.length; j++) {
        totalCliente = totalCliente + clientes[i].ordenes[j].precioFinal;
    }
    totalCompras.push(totalCliente);
}

// chart.js
const datosGrafico = {
    labels: nombre_clientes,
    datasets: [
        {
            label: "Total compras por cliente",
            data: totalCompras,
            backgroundColor: "rgba(75, 93, 192, 0.6)",
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 1
        }
    ]
};

console.log(datosGrafico);

// variable canvas donde dibujaremos el grafico
const ctx = document.getElementById("graficoCompras").getContext("2d");

// Construimos el grafico de barras
const miGrafico = new Chart(ctx, {
    type: "bar",
    data: datosGrafico,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Nos vamos de compras :D"
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});