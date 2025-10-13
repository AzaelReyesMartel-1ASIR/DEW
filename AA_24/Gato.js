import { Animal } from "./Animal.js";

// Clase gato que hereda de animal
export class Gato extends Animal {
    constructor(nombre, especie, edad, tipoAct, estadoAct, estadoSalud, areaAlojamiento) {
        super(nombre, especie, edad, tipoAct, estadoAct, estadoSalud, areaAlojamiento);
    }
}
