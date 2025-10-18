// Clase Pelicula
export class Pelicula{
    constructor(public titulo: string, public duracion: number, public clasEdad: string, public precioBase: number, public salaAsignada: number){
        this.titulo = titulo;
        this.duracion = duracion;
        this.clasEdad = clasEdad;
        this.precioBase = precioBase;
        this.salaAsignada = salaAsignada;
    }
}