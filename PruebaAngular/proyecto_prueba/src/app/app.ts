import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entrenador } from './entrenador/entrenador';
import { EquipoPokemon } from './equipo-pokemon/equipo-pokemon';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entrenador, EquipoPokemon],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto_prueba');
}
