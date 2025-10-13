// Clase Vehiculo
class Vehiculo{
    // Definimos constructor con sus propiedades
    constructor(marca, modelo, anioFabricacion, tipo){
        this.marca = marca;
        this.modelo = modelo;
        this.anioFabricacion = anioFabricacion;
        this.tipo = tipo;
        this.servicios = [];
    }
    // Metodo para anadir servicios
    añadirServicios(servicio){

        this.servicios.push(servicio);

    }
    // Metodo para visualizar servicios
    visualizarServicios() {
        console.log(`\nServicios del vehículo ${this.marca} ${this.modelo}:`);
        // Recorremos los servicios del array 
        for (let i = 0; i < this.servicios.length; i++){
            let servicio = this.servicios[i];
            console.log(` ${i + 1}. ${servicio.tipoServicio}\n 
                Estado: ${servicio.estado}\n
                Descuento: ${servicio.descuento*100}%\n 
                Precio original: ${servicio.precioOriginal}€\n 
                Precio final: ${servicio.precioFinal}€\n 
                Fecha Realizacion servoicio:${servicio.fecha}\n`);
        };
    }
    // metodo para filtrar por estado que especifiquemos como parametro
    filtrarServiciosPorEstado(estadoBuscado) {
        // Creamos un array con los servicios con el estado buscado
        let filtro = this.servicios.filter(servicio => servicio.estado === estadoBuscado);

        // Condicional para saber si hay servicios con el estado buscado
        if (filtro.length === 0) {
            console.log(`No hay estados de tipo "${estadoBuscado}" para el vehículo ${this.marca} ${this.modelo}`);
        } 
        // Mostramos los servicios
        else {
            console.log(`Servicios del vehículo ${this.marca} ${this.modelo} con estado "${estadoBuscado}":`);
            // Recorremos los servicios con el estado buscado y mostramos su informacion
            for (let i = 0; i < filtro.length; i++) {
                console.log(` ${i + 1}. ${filtro[i].tipoServicio}\n Estado: ${filtro[i].estado}\n Descuento: ${filtro[i].descuento*100}%\n Precio original: ${filtro[i].precioOriginal}€\n Precio final: ${filtro[i].precioFinal}€`);
            }
        }
    }    

}
// Clase Servicio
class Servicio{

    constructor(tipoServicio, estado, precioOriginal, fecha, descuento, precioFinal){
        this.tipoServicio = tipoServicio;
        this.estado = estado;
        this.precioOriginal = precioOriginal;
        this.fecha = fecha;
        this.descuento = descuento;
        this.precioFinal = precioFinal;
        this.fechaAct = new Date().getFullYear();
    }
    // Metodo para calcular el descuento recibiendo el año de fabricacion
    Calculodescuento(anio){
        // Obtenemos la antiguedad
        let antiguedad = this.fechaAct - anio;
        // Condicionales para calcular el descuento
        if (antiguedad < 2){
            this.descuento = 0.10;
        } else if (antiguedad >=2 && antiguedad <= 5){
            this.descuento = 0.05;
        } else if (antiguedad > 10){
            this.descuento = 0.20;
        } else {
            this.descuento = 0;
        }

        return this.descuento;

    }

    // Metodo para calcular el precio final
    CalculoprecioFinal(){

        this.precioFinal = this.precioOriginal * (1 - this.descuento);
        return this.precioFinal;

    }

}
// Clase TipoServicio
class TipoServicio{

    constructor(TipoServicio1="Cambio de aceite", TipoServicio2="Revisión de frenos", TipoServicio3="Alineación"){
        this.TipoServicio1 = TipoServicio1;
        this.TipoServicio2 = TipoServicio2;
        this.TipoServicio3 = TipoServicio3;
        this.arrayTipoServicios = [TipoServicio1, TipoServicio2, TipoServicio3];
    }

}
// Clase Estado
class Estado{

    constructor(Estado1="Pendiente", Estado2="En progreso", Estado3="Completado"){
        this.Estado1 = Estado1;
        this.Estado2 = Estado2;
        this.Estado3 = Estado3;
        this.arrayEstado = [Estado1, Estado2, Estado3];
    }

}
// Creamos los objetos con las instancias TipoServicio y Estado
let TipoServicio1 = new TipoServicio();
let Estados = new Estado();

// Creamos los objetos con las instancias Vehiculo y Servicio
let vehiculo1 = new Vehiculo("Audi", "A4", 2014, "SUV");
let vehiculo2 = new Vehiculo("BMW", "X5", 2016, "SUV");

// Creamos los objetos con las instancias Servicio
let servicio1 = new Servicio(TipoServicio1.arrayTipoServicios[0], Estados.arrayEstado[2], 1000, "2025-10-10", 0, 0);
let servicio2 = new Servicio(TipoServicio1.arrayTipoServicios[2], Estados.arrayEstado[1], 800, "2024-11-1", 0, 0);
let servicio3 = new Servicio(TipoServicio1.arrayTipoServicios[1], Estados.arrayEstado[0], 1500, "2019-08-19", 0, 0);
let servicio4 = new Servicio(TipoServicio1.arrayTipoServicios[0], Estados.arrayEstado[2], 2000, "2005-01-14", 0, 0);

// Calculamos los descuentos y precios finales de cada servcio
servicio1.Calculodescuento(vehiculo1.anioFabricacion);
servicio1.CalculoprecioFinal();

servicio2.Calculodescuento(vehiculo1.anioFabricacion);
servicio2.CalculoprecioFinal();

servicio3.Calculodescuento(vehiculo2.anioFabricacion);
servicio3.CalculoprecioFinal();

servicio4.Calculodescuento(vehiculo2.anioFabricacion);
servicio4.CalculoprecioFinal();

// Anadimos los servicios a cada vehiculo
vehiculo1.añadirServicios(servicio1);
vehiculo1.añadirServicios(servicio2);
vehiculo2.añadirServicios(servicio3);
vehiculo2.añadirServicios(servicio4);

// Visualizamos los servicios
console.log("VISUALIZACIÓN DE SERVICIOS\n");

vehiculo1.visualizarServicios();
vehiculo2.visualizarServicios();

// Filtramos los servicios por estado
console.log("\nFILTRO DE SERVICIOS\n\n");

vehiculo1.filtrarServiciosPorEstado(Estados.arrayEstado[0]);
vehiculo2.filtrarServiciosPorEstado(Estados.arrayEstado[0]);
vehiculo1.filtrarServiciosPorEstado(Estados.arrayEstado[1]);
vehiculo2.filtrarServiciosPorEstado(Estados.arrayEstado[1]);
vehiculo1.filtrarServiciosPorEstado(Estados.arrayEstado[2]);
vehiculo2.filtrarServiciosPorEstado(Estados.arrayEstado[2]);