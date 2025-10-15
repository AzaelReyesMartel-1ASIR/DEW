let arr_empl = [];
let arr_horas = [];
let arr_pagos = [];

arr_empl.push("Azael");
arr_empl.push("Josue");
arr_empl.push("Pauli");

arr_horas.push(45);
arr_horas.push(40);
arr_horas.push(50);

arr_pagos.push(20);
arr_pagos.push(25);
arr_pagos.push(40);

console.log(arr_empl);
console.log(arr_horas);
console.log(arr_pagos);

let sueldo = 0;
let neto = 0;
let horas_extr = 0;
let sueldo_bruto = [];
let sueldo_neto = [];
// Sueldo Bruto
for (let i = 0; i < arr_empl.length; i++) {
    
    if (arr_horas[i]<=40){
        sueldo = arr_horas[i]*arr_pagos[i];
        sueldo_bruto.push(sueldo);
    } else{
        horas_extr = arr_pagos[i]*1.5;
        sueldo = (40*arr_pagos[i]) + ((arr_horas[i]-40)*horas_extr);
        sueldo_bruto.push(sueldo);
    }

    if (sueldo_bruto[i]>1000) {
        neto = sueldo_bruto[i] - (sueldo_bruto[i]*0.1);
        sueldo_neto.push(neto);
    } else {
        neto = sueldo_bruto[i] - (sueldo_bruto[i]*0.05);
        sueldo_neto.push(neto);
    }
}

for (let i = 0; i < arr_empl.length; i++) {
    console.log(`Nombre empleado: ${arr_empl[i]}\nSueldo neto: ${sueldo_neto[i]}`);   
}

console.log("BORRAR EMPLEADO");

let empleado_borrar = "Pauli";

let indice = arr_empl.indexOf(empleado_borrar);

arr_empl.splice(indice, 1);
arr_horas.splice(indice, 1);
arr_pagos.splice(indice, 1);
sueldo_bruto.splice(indice, 1);
sueldo_neto.splice(indice, 1);
    
for (let i = 0; i < arr_empl.length; i++) {
    console.log(`Nombre empleado: ${arr_empl[i]}\nSueldo neto: ${sueldo_neto[i]}`);   
}