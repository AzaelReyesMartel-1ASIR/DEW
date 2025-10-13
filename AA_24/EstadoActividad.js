// Clase EstadoActividad
export class EstadoActividad{

    constructor(estadoAct1="Pendiente", estadoAct2="En progreso", estadoAct3="Completada"){
        this.estadoAct1 = estadoAct1;
        this.estadoAct2 = estadoAct2;
        this.estadoAct3 = estadoAct3;
        this.array = [estadoAct1, estadoAct2, estadoAct3];
    }
}