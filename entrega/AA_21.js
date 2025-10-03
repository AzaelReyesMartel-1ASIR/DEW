// Creamos las variables que necesitaremos
// Convertimos string a entero
let numEmpleados = parseInt(prompt("Cuantos empleados se registrarán"));
let nombre_Empleados;
let horas;
let pagos;
let arr_empleados = [];
let arr_horas = [];
let arr_pagos = [];
let arr_SueldoBruto = [];
let arr_SueldoNeto = [];
let resultado;

while (numEmpleados<=0 || isNaN(numEmpleados)) {

    numEmpleados = parseInt(prompt("Vuelve a escribir el número, que sea un número y mayor a 0"));
    
}

/* Bucle for donde preguntamos al usuario 
   hasta el num de empleados que introduzca */
for (let num = 1; num <= numEmpleados; num++) {

    nombre_Empleados = prompt("Nombre de empleado "+num+":");
    // Convierto los valores a número
    horas = parseFloat(prompt("Horas trabajadas en la semana:"));
    pagos = parseFloat(prompt("Pago por hora:"));

    // Vamos pusheando cada elemento de los diferentes arrays
    arr_empleados.push(nombre_Empleados);
    arr_horas.push(horas);
    arr_pagos.push(pagos);
    
}

// Variables a utilizar dentro del los condicionales
let horas_max = 40;
let horas_extras = 150/100;
let porcentaje = 10/100;
let porcentaje_dos = 5/100;
let sueldoNeto;

// Bucle for donde calculamos el Sueldo Bruto y Sueldo Neto
for (let index = 0; index < arr_horas.length; index++) {
    // Sueldo Bruto si trabaja 40h o menos
    if (arr_horas[index]<=40) {
        resultado = arr_horas[index] * arr_pagos[index];
        arr_SueldoBruto.push(resultado);
    // Sueldo Bruto si trabaja más de 40h
    } else {

        resultado = (arr_horas[index] - horas_max) * arr_pagos[index] * horas_extras + (horas_max * arr_pagos[index]);
        // Fijamos que sean solo 2 decimales
        arr_SueldoBruto.push(resultado.toFixed(2));
        
    }
    // Sueldo Neto si Sueldo Bruto es mayor a 1000
    if (arr_SueldoBruto[index] > 1000) {
        sueldoNeto = arr_SueldoBruto[index] - (arr_SueldoBruto[index] * porcentaje);
        arr_SueldoNeto.push(sueldoNeto.toFixed(2));
    // Sueldo Neto si no es mayor a 1000
    } else {
        sueldoNeto = arr_SueldoBruto[index] - (arr_SueldoBruto[index] * porcentaje_dos);
        arr_SueldoNeto.push(sueldoNeto.toFixed(2));
    }
}

// Mostramos por consola de forma bonita
for (let index = 0; index < arr_empleados.length; index++) {
    console.log("Empleado: "+arr_empleados[index]+" con Sueldo Bruto -> "+arr_SueldoBruto[index]+" y Sueldo Neto -> "+arr_SueldoNeto[index]);
    
}

// Variable para preguntar el nombre del empleado a borrar
let empleado_borrar = prompt("Qué usuario desea borrar?: ");
// Buscamos el indice con el nombre del empleado que haya puesto
let indice = arr_empleados.indexOf(empleado_borrar);

// Condicional para eliminar empleado que exista
if (indice>-1) {
    arr_empleados.splice(indice,1);
    arr_SueldoBruto.splice(indice,1);
    arr_SueldoNeto.splice(indice,1);
}

// Mostramos ahora después de eliminar un usuario por consola de forma bonita
console.log("--- Mostramos resultado después de eliminar un usuario ---");
for (let index = 0; index < arr_empleados.length; index++) {
    console.log("Empleado: "+arr_empleados[index]+" con Sueldo Bruto -> "+arr_SueldoBruto[index]+" y Sueldo Neto -> "+arr_SueldoNeto[index]);   
}