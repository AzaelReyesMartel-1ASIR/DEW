// Clase SalaCine con su constructor y parametros
export class SalaCine{
    constructor(public numSala: number, public capacidadTotal: number, public butacasDisponibles: number){
        this.numSala = numSala;
        this.capacidadTotal = capacidadTotal;
        this.butacasDisponibles = butacasDisponibles;
    }
    // Metodo mostrar info SalaCine
    SalaCineMostrar(){
        console.log(`Numero Sala: ${this.numSala}
Capacidad total: ${this.capacidadTotal}
Butacas disponibles: ${this.butacasDisponibles}`);
    }
    // Metodo mostrar butacas
    SalaCineMostrarButacas(titulo: string){
        console.log(`Nombre Pelicula: ${titulo}
Butacas Disponibles: ${this.butacasDisponibles}
Capacidad total: ${this.capacidadTotal}`);
    }
}