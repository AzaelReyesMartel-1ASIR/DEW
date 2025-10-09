const Fechas = [
    {
        fecha:"2014-10-06"
    },
    {
        fecha:"2012-07-04"
    },
    {
        fecha:"2005-10-06"
    },
    {
        fecha:"1993-10-06"
    }
]

// Primero creamos un array para guardar fechas

let array_fechas = [];

Fechas.forEach(element => {
    array_fechas.push(element.fecha);
});

console.log(array_fechas);

// Ahora creamos un array para convertirlas a tipo fecha

let conversion_fechas = [];

array_fechas.forEach(element =>{

    conversion_fechas.push(new Date(element));

});

console.log(conversion_fechas);

// Ahora nos creamos un array para calcular las diferentes edades

let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();

let edades = [];

for (let i = 0; i < conversion_fechas.length; i++) {
    let anioNacimiento = conversion_fechas[i].getFullYear();
    let edad = anioActual - anioNacimiento;

    edades.push(edad);
}

console.log("Edades: "+edades);

