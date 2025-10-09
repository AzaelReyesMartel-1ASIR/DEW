let fechaNacimiento = "2004-08-19";
let nacimiento = new Date(fechaNacimiento);

let fechaActual = new Date();

console.log("Fecha actual:"+fechaActual);

let edad = (fechaActual.getFullYear() - nacimiento.getFullYear());

console.log("La edad de Aza es: "+edad+" años.");