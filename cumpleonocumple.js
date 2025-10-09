let fechaNacimiento = "2004-08-19";

let nacimiento = new Date(fechaNacimiento);

let fechaActual = new Date();

let mes_actual = fechaActual.getMonth();

let mes_cliente = nacimiento.getMonth();

let dia_actual = fechaActual.getDate();

let dia_cliente = nacimiento.getDate();

if ((mes_actual === mes_cliente) && (dia_actual === dia_cliente)) {

    console.log("Feliz cumpleaños Azael!");

} else {

    console.log("No es tu cumpleaños hoy!");

}