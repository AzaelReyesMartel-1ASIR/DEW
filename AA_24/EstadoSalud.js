// Clase EstadoSalud
export class EstadoSalud{

    constructor(estadoS1="Sano", estadoS2="En tratamiento", estadoS3="Crítico"){
        this.estadoS1 = estadoS1;
        this.estadoS2 = estadoS2;
        this.estadoS3 = estadoS3;
        this.array = [estadoS1, estadoS2, estadoS3];
    }
}