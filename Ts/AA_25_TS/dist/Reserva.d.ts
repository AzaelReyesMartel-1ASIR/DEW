import { SalaCine } from "./SalaCine.js";
export declare class Reserva {
    nombreCliente: string;
    peliculaR: string;
    numEntradas: number;
    fecha: Date;
    hora: string;
    precioTotal: number;
    estadoReserva: string;
    static arrC: Reserva[];
    static arrConf: Reserva[];
    static arrP: Reserva[];
    constructor(nombreCliente: string, peliculaR: string, numEntradas: number, fecha: Date, hora: string, precioTotal: number, estadoReserva: string);
    ReservaMostrar(): void;
    ReservaMostrarFiltro(): void;
    ReservaButacasDisponibles(nombre: string, precioBasePeli: number, clasEdadPeli: string, sala: SalaCine): void;
    ReservaCancelar(sala: SalaCine): void;
    ReservasConsultar(reserva: Reserva): void;
}
//# sourceMappingURL=Reserva.d.ts.map