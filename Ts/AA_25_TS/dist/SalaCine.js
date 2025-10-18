// Clase SalaCine con su constructor y parametros
export class SalaCine {
    constructor(numSala, capacidadTotal, butacasDisponibles) {
        this.numSala = numSala;
        this.capacidadTotal = capacidadTotal;
        this.butacasDisponibles = butacasDisponibles;
        this.numSala = numSala;
        this.capacidadTotal = capacidadTotal;
        this.butacasDisponibles = butacasDisponibles;
    }
    // Metodo mostrar info SalaCine
    SalaCineMostrar() {
        console.log(`Numero Sala: ${this.numSala}
Capacidad total: ${this.capacidadTotal}
Butacas disponibles: ${this.butacasDisponibles}`);
    }
    // Metodo mostrar butacas
    SalaCineMostrarButacas(titulo) {
        console.log(`Nombre Pelicula: ${titulo}
Butacas Disponibles: ${this.butacasDisponibles}
Capacidad total: ${this.capacidadTotal}`);
    }
}
//# sourceMappingURL=SalaCine.js.map