// Clase TipoActividad
export class TipoActividad{

    constructor(Actividad1="alimentación", Actividad2="limpieza", Actividad3="atención médica/socialización"){
        this.Actividad1 = Actividad1;
        this.Actividad2 = Actividad2;
        this.Actividad3 = Actividad3;
        this.array = [Actividad1, Actividad2, Actividad3];
    }
}