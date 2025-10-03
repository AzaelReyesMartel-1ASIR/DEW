// Función que recibe un valor y devuelve true si es un número válido >= 0
function esnumeroValido(x){

    return typeof x === "number" && !isNaN(x) && x >= 0;

}

// Ejemplos:
console.log(esNumeroValido(5));     // true (es número positivo)
console.log(esNumeroValido(-3));    // false (es negativo)
console.log(esNumeroValido("hola"));// false (no es número)
console.log(esNumeroValido(NaN));   // false (NaN no es válido)