let nota = prompt("Introduce tu nota: ");

while (nota<0) {
    
    nota = prompt("La nota debe ser positiva o 0 (0-10): ");

}

while (nota>10){
 
    nota = prompt("La nota debe ser positiva o 0 (0-10): ");

}

nota = parseInt(nota);

let resultado;

if (nota < 5) {
  resultado = "Suspendido";
} else if (nota == 5) {
  resultado = "Aprobado por los pelos";
} else if (nota == 6) {
  resultado = "Bien";
} else if (nota == 10) {
  resultado = "Sobresaliente";
} else if (nota >= 8) {
  resultado = "Notable";
} else {
  resultado = "Aprobado";
}

alert(resultado);
