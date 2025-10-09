// Clase Vehiculo
class Vehiculo{

    // Constructor donde definimos parametros
    constructor(marca, modelo, anio_fabricacion, tipo){

        this.marca = marca;
        this.modelo = modelo;
        this.anio_fabricacion = anio_fabricacion;
        this.tipo = tipo;
    }
}

// Clase Servicio
class Servicio{

    // Constructor donde definimos parametros y pasamos objetos que crearemos de vehiculo y estado
    constructor(Vehiculo, TipoServicio, precioOriginal, fecha, descuento, precioFinal, Estado) {

        this.Vehiculo = Vehiculo;        
        this.TipoServicio = TipoServicio;
        this.precioOriginal = precioOriginal;
        this.fecha = fecha;
        this.descuento = descuento;
        this.precioFinal = precioFinal;
        this.Estado = Estado;
    }

    // Metodo para aplicar descuentos
    aplicarDescuento(){

        // Variable fecha actual y sacamos solo el año
        let anio_actual = new Date();

        let anio = anio_actual.getFullYear();

        // variable para saber los años, trayendo el año de fabricacion, convertido a fecha y sacando solo el año
        let anios_uso = anio - new Date(this.Vehiculo.anio_fabricacion).getFullYear();

        // Condicion para aplicar descuento dependiendo de los años
        if (anios_uso<2) {
            this.descuento = 0.10;            
        } else if(anios_uso>=2 && anios_uso<=5){
            this.descuento = 0.05;
        } else if(anios_uso>10){
            this.descuento = 0.20;
        } else{
            this.descuento = 0;
        }
        // Calculamos el precio final, aplicando descuento
        this.precioFinal = this.precioOriginal * (1 - this.descuento);
    }
    // Metodo para mostrar de forma bonita los datos
    mostrar() {
        console.log(`Tipo Servicio: ${this.TipoServicio} 
Marca del coche: ${this.Vehiculo.marca}
Modelo de vehiculo: ${this.Vehiculo.modelo}
Tipo de vehiculo: ${this.Vehiculo.tipo}
Fecha de realizacion de servicio: ${this.fecha}
Precio original: ${this.precioOriginal}€
Descuento aplicado: ${(this.descuento * 100)}%
Precio final: ${this.precioFinal}€
Estado: ${this.Estado}`);
    }
}

// Clase de tipo de servicio
class TipoServicio{

    // Constructor con parametros definidos
    constructor(ts1 = "cambio aceite", ts2 = "revisión frenos", ts3 = "alineacion"){

        this.ts1 = ts1;
        this.ts2 = ts2;
        this.ts3 = ts3;

        this.arrayTs = [ts1, ts2, ts3];
    }

    // mostrarDetalles(){console.log(this.arrayTs);}
    // metodo para elegir un indice aleatorio del array que introduzcamos 
    // elementoAleatorio(array) {
    // const indice = Math.floor(Math.random() * array.length);
    // return array[indice];
    // }
}

// Clase estado
class Estado{

    //Constructor con parametros
    constructor(estado1 = "pendiente", estado2 = "en progreso", estado3 = "completado"){

        this.estado1 = estado1;
        this.estado2 = estado2;
        this.estado3 = estado3;

        this.arrayEstado = [estado1, estado2, estado3];
    }

    // Mismo metodo que para el array de servicio
    // elementoAleatorio(array) {
    // const indice = Math.floor(Math.random() * array.length);
    // return array[indice];
    // }
}

// Función para elegir un indice aleatorio para tipo de servicio y estado
function elementoAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

// Creamos un objeto con una nueva instancia de tipo de servicio y estado
let tiposServicio = new TipoServicio();
let estados = new Estado();

// Creamos una instancia de vehiculo
let vehiculo1 = new Vehiculo("mitsubishi", "gasolina", "2004-08-19", "turismo");

// Creamos instancia de servicio, donde utilizamos las instancias de tipo servicio y estado para acceder al metodo y al array de tipos de servicios y estados
let servicio1 = new Servicio(vehiculo1, elementoAleatorio(tiposServicio.arrayTs), 100, new Date(), 0, 0, elementoAleatorio(estados.arrayEstado));

// aplicamos el descuento en el objeto servicio1
servicio1.aplicarDescuento();

//Mostramos los resultados
servicio1.mostrar();