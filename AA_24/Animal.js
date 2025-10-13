// Clase Animal, que tenemos que exportar para poder usarla en otros ficheros
export class Animal{
    // Constructor con propiedades
    constructor(nombre, especie, edad, estadoAct, estadoSalud, areaAlojamiento){
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.estadoAct = estadoAct;
        this.estadoSalud = estadoSalud;
        this.areaAlojamiento = areaAlojamiento;
        this.actividades = [];
    }

    // metodo para añadir actividades a array
    añadirActividades(actividad){
        this.actividades.push(actividad);
    }

    // metodo para mostrar info de animales con sus actividades
    mostrarAnimales(){
        console.log(` El animal es de especie ${this.especie}
 Se llama ${this.nombre} y tiene ${this.edad} años. 
 Su estado de salud es: ${this.estadoSalud}
 Se aloja en: ${this.areaAlojamiento}
 Sus actividades son: ${this.actividades}`)}
}

