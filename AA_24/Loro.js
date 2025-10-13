import { Animal } from "./Animal.js";
// Clase Loro que hereda de Animal
export class Loro extends Animal {
    constructor(nombre, especie, edad, tipoAct, estadoAct, estadoSalud, areaAlojamiento) {
        super(nombre, especie, edad, tipoAct, estadoAct, estadoSalud, areaAlojamiento);
    }
}
