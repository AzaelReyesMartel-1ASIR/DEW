const nombres = [];

let nombresTotal = 5;

for (let n=1;n<=nombresTotal;n++){
    let nombre = prompt("dame 5 nombres: ");
    nombres.push(nombre);
}

for (let index = 0; index < nombres.length; index++) {
    console.log((index+1) + "---" + nombres[index]);
    
}

