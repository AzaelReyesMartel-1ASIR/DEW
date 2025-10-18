// Importamos clase SalaCine
import { SalaCine } from "./SalaCine.js";
// Clase Reserva
export class Reserva {
    // arrays de reserva estaticos vacios
    // creados para almacenar reservas por su estado
    static arrC: Reserva[] = [];
    static arrConf: Reserva[] = [];
    static arrP: Reserva[] = [];
    constructor(public nombreCliente: string, public peliculaR: string, public numEntradas: number, public fecha: Date, public hora: string, public precioTotal: number, public estadoReserva: string){
        this.nombreCliente = nombreCliente;
        this.peliculaR = peliculaR;
        this.numEntradas = numEntradas;
        this.fecha = fecha;
        this.precioTotal = precioTotal;
        this.estadoReserva = estadoReserva;
    }
    // Metodo mostrar info reservas
    ReservaMostrar(){
        console.log(`Nombre cliente: ${this.nombreCliente}
Nombre Peli: ${this.peliculaR}
Fecha y hora proyección: ${this.fecha}, a las ${this.hora}.
Precio Total: ${this.precioTotal}
Estado Reserva: ${this.estadoReserva}`);
    }
    // Metodo mostrar reservas por estado
    ReservaMostrarFiltro(){
        console.log(`RESERVAS CANCELADAS`);
        Reserva.arrC.forEach(c => {
            c.ReservaMostrar();
        });
        console.log(`RESERVAS CONFIRMADAS`);
        Reserva.arrConf.forEach(conf => {
            conf.ReservaMostrar();
        });
        console.log(`RESERVAS PENDIENTES`);
        Reserva.arrP.forEach(p => {
            p.ReservaMostrar();
        });
    }
    // Metodo para reservar butacas, verificando disponibilidad y calculando precio total
    ReservaButacasDisponibles(nombre: string, precioBasePeli: number, clasEdadPeli: string, tituloPeli: string, sala: SalaCine) {
        this.precioTotal = precioBasePeli * this.numEntradas;
        // Condicional si el numero de entradas supera disponibles, se cancela
        if (sala.butacasDisponibles >= this.numEntradas) {
            this.estadoReserva = "confirmada";
            // Si num entradas mayor a 5, descuento
            if (this.numEntradas>5) {
            this.precioTotal *= (1 - 0.10);
            console.log(`Se aplica 10% a precio total para el cliente ${nombre}`);
            }
            // Si es para todo publico, descuento
            if (clasEdadPeli === "TP") {
                this.precioTotal *= (1 - 0.05);
                console.log(`Se aplica 5% más a precio total para el cliente ${nombre}`);
            }
            // Restamos butacas
            sala.butacasDisponibles -= this.numEntradas;
            // Si son mas entradas que butacas disponibles, se cancela
        } else {
            this.estadoReserva = "cancelada";
        }
    }
    // Metodo cancelar reserva y devolver numero de butacas
    ReservaCancelar(sala: SalaCine){
        this.estadoReserva = "cancelada";
        sala.butacasDisponibles += this.numEntradas;
    }
    // Metodo guardar reservas por estado
    ReservasConsultar(reserva: Reserva){
        if(this.estadoReserva === "cancelada"){
            Reserva.arrC.push(reserva);            
        }
        if (this.estadoReserva === "confirmada"){
            Reserva.arrConf.push(reserva);
        }
        if (this.estadoReserva === "pendiente"){
            Reserva.arrP.push(reserva);
        }
    }
}
