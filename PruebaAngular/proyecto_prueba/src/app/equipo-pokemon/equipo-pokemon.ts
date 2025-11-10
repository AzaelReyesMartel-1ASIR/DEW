import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Pokemon } from "../models/pokemon.model";

@Component({
  selector: 'app-equipo-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo-pokemon.html',
  styleUrl: './equipo-pokemon.css',
})
export class EquipoPokemon {
  @Input()
  equipo: Pokemon[] = [];
}
