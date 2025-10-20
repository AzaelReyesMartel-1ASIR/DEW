// Importamos las clases
import { Pelicula } from "./Pelicula.js";
import { SalaCine } from "./SalaCine.js";
import { Reserva } from "./Reserva.js";
import { EstadoReserva } from "./EstadoReserva.js";
import { ClasificacionEdad } from "./ClasificacionEdad.js";

// Creamos objetos con instancias de clase Pelicula
const peli1 = new Pelicula("KnY", 155, ClasificacionEdad.ClasEdad2, 7, 1);
const peli2 = new Pelicula("KnY2", 155, ClasificacionEdad.ClasEdad1, 7, 2);
const peli3 = new Pelicula("KnY3", 155, ClasificacionEdad.ClasEdad4, 7, 3);
const peli4 = new Pelicula("Chainsaw Man", 155, ClasificacionEdad.ClasEdad3, 7, 4);

// Creamos Salas de Cine
const sala1 = new SalaCine(1, 50, 15);
const sala2 = new SalaCine(2, 50, 0);
const sala3 = new SalaCine(3, 50, 1);
const sala4 = new SalaCine(4, 50, 10);

// Creamos Reservas
const reserva1 = new Reserva("Azael", "Chainsaw Man", 6, new Date('2025-09-11'), "22:00", 0, EstadoReserva.estadoR1);
const reserva2 = new Reserva("Dani", "KnY3", 6, new Date('2025-10-31'), "21:00", 0, EstadoReserva.estadoR1);
const reserva3 = new Reserva("Jose", "KnY", 10, new Date('2025-11-30'), "23:00", 0, EstadoReserva.estadoR1);
const reserva4 = new Reserva("Yeray", "KnY", 5, new Date('2025-11-31'), "23:00", 0, EstadoReserva.estadoR1);
const reserva5 = new Reserva("Josue", "KnY", 6, new Date('2025-11-31'), "23:00", 0, EstadoReserva.estadoR1);
const reserva6 = new Reserva("Maulla", "Chainsaw Man", 6, new Date('2025-11-31'), "23:00", 0, EstadoReserva.estadoR1);

// Reservamos butacas, verificando disponibilidad y calculando precio
reserva1.ReservaButacasDisponibles( reserva1.nombreCliente, peli4.precioBase, peli4.clasEdad, peli4.titulo, sala4);
reserva2.ReservaButacasDisponibles(reserva2.nombreCliente, peli3.precioBase, peli3.clasEdad, peli3.titulo, sala3);
reserva3.ReservaButacasDisponibles(reserva3.nombreCliente, peli1.precioBase, peli1.clasEdad, peli1.titulo, sala1);
reserva4.ReservaButacasDisponibles(reserva4.nombreCliente, peli1.precioBase, peli1.clasEdad, peli1.titulo, sala1);
// Pendiente reserva5.ReservaButacasDisponibles(peli1.precioBase, peli1.clasEdad, peli1.titulo, sala1);

// Cancelo una reserva
reserva1.ReservaCancelar(sala4);

// Reservo de nuevo las butacas que he cancelado
reserva6.ReservaButacasDisponibles(reserva6.nombreCliente, peli4.precioBase, peli4.clasEdad, peli4.titulo, sala4);

// Filtramos las reservas
reserva1.ReservasConsultar(reserva1);
reserva2.ReservasConsultar(reserva2);
reserva3.ReservasConsultar(reserva3);
reserva4.ReservasConsultar(reserva4);
reserva5.ReservasConsultar(reserva5);
reserva6.ReservasConsultar(reserva6);

// Visualizamos reservas por estado
reserva1.ReservaMostrarFiltro();

// Mostramos butacas de cada sala
console.log(`BUTACAS RESTANTES DISPONIBLES`);
sala1.SalaCineMostrarButacas(peli1.titulo);
sala2.SalaCineMostrarButacas(peli2.titulo);
sala3.SalaCineMostrarButacas(peli3.titulo);
sala4.SalaCineMostrarButacas(peli4.titulo);