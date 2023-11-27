import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-listining',
  templateUrl: './listining.component.html',
  styleUrls: ['./listining.component.scss']
})
export class ListiningComponent {
  @Input() listadoGames: Game[] = [];

  @Input() cargandoGames = false;

  gameSeleccionado: Game | null = null;
}
