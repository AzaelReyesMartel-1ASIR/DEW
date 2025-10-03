let num = prompt("Elige un numero: ");
let suma = 0;

num = parseFloat(num);

for (let n = 1; n <= num; n++) {
    suma = suma + n;
    console.log("Se suma " + n + " → suma parcial: " + suma);
}

alert("La suma total es: "+suma);