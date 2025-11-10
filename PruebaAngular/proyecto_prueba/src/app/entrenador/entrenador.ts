import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Entrenador as EntrenadorModelo } from "../models/entrenador.model";
import { Pokemon } from "../models/pokemon.model";
import { EquipoPokemon } from "../equipo-pokemon/equipo-pokemon";

@Component({
  selector: 'app-entrenador',
  standalone: true,
  imports: [CommonModule, EquipoPokemon],
  templateUrl: './entrenador.html',
  styleUrl: './entrenador.css',
})
export class Entrenador {
  entrenador: EntrenadorModelo = {
    id: 1,
    nombre: "Ash",
    apellido: "Ketchup",
    pokemonFavorito: "Pikachu",
  };

  equipo: Pokemon[] = [
    { id: 25, nombre: "Pikachu", tipo: "Eléctrico", nivel: 88 },
    { id: 6, nombre: "Charizard", tipo: "Fuego/Volador", nivel: 85 },
    { id: 1, nombre: "Bulbasaur", tipo: "Planta/Veneno", nivel: 70 },
    { id: 7, nombre: "Squirtle", tipo: "Agua", nivel: 68 },
    { id: 149, nombre: "Dragonite", tipo: "Dragón/Volador", nivel: 80 },
  ];
}
