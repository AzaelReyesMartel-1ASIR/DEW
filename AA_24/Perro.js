// Importamos la clase animal
import { Animal } from "./Animal.js";

// Creamos la clase perro que hereda de la clase animal
export class Perro extends Animal {
    constructor(nombre, especie, edad, tipoAct, estadoAct, estadoSalud, areaAlojamiento) {
        super(nombre, especie, edad, tipoAct, estadoAct, estadoSalud, areaAlojamiento);
    }
}
