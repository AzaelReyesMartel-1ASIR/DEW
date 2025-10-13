// Importamos todas las clases que vamos a usar
import { Perro } from "./Perro.js";
import { Gato } from "./Gato.js";
import { Loro } from "./Loro.js";
import { TipoActividad } from "./TipoActividad.js";
import { EstadoActividad } from "./EstadoActividad.js";
import { EstadoSalud } from "./EstadoSalud.js";
import { AreaAlojamiento } from "./AreaAlojamiento.js";

// Creamos todas las instanacias de las clases y los objetos
let EstadosAct = new EstadoActividad();
let EstadosSalud = new EstadoSalud();
let AreasAlojamiento = new AreaAlojamiento();
let TiposAct = new TipoActividad();

// Creamos animales
let Perro1 = new Perro("Princesa", "Pitbull", 5, EstadosAct.array[0], EstadosSalud.array[1], AreasAlojamiento.array[2]);
let Perro2 = new Perro("Noa", "Mil Leches", 5, EstadosAct.array[1], EstadosSalud.array[0], AreasAlojamiento.array[1]);
let Gato1 = new Gato("Mishifu", "Gato", 2, EstadosAct.array[2], EstadosSalud.array[0], AreasAlojamiento.array[0]);
let Loro1 = new Loro("Wally", "Loro", 6, EstadosAct.array[1], EstadosSalud.array[2], AreasAlojamiento.array[1]);

// Añadimos actividades a cada objeto de animal
Perro1.añadirActividades(TiposAct.array[2]);
Perro1.añadirActividades(TiposAct.array[1]);

Perro2.añadirActividades(TiposAct.array[0]);
Perro2.añadirActividades(TiposAct.array[2]);

Gato1.añadirActividades(TiposAct.array[1]);
Gato1.añadirActividades(TiposAct.array[0]);

Loro1.añadirActividades(TiposAct.array[0]);
Loro1.añadirActividades(TiposAct.array[2]);

// Mostramos animales con su info y actividades por consola
Perro1.mostrarAnimales();
Perro2.mostrarAnimales();
Gato1.mostrarAnimales();
Loro1.mostrarAnimales();

// Recogemos los animales en un array
const animales = [Perro1, Perro2, Gato1, Loro1];

// Creamos dos arrays para recoger los datos para el grafico
const nombres = [];
const estados = [];

// Creamos un array para recoger los colores
let colores = [];

// Bucle for recorrer array animales
for (let i = 0; i < animales.length; i++) {
  nombres.push(animales[i].nombre);
  estados.push(animales[i].estadoSalud);

  // Condicional para ordenar colores
  if (animales[i].estadoSalud === 'Sano')
    { 
        colores.push('#4CAF50');
    }
  else if (animales[i].estadoSalud === 'En tratamiento') 
    {
        colores.push('#FFC107');
    }
  else if (animales[i].estadoSalud === 'Crítico') 
    {
        colores.push('#F44336')
    }
}

// Definimos constante con el id del index.html del canvas
const ctx = document.getElementById('SaludAnimalesChart');

// Creamos el grafico de barras
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: nombres,
    datasets: [{
      label: 'Estado de salud',
      data: [1, 1, 1, 1],
      backgroundColor: colores,
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            // Mostramos directamente el estado de salud correspondiente
            return 'Estado: ' + estados[context.dataIndex];
          }
        }
      }
    },
    scales: {
      y: { beginAtZero: true },
      x: { title: { display: true, text: 'Animales' } }
    }
  }
});

