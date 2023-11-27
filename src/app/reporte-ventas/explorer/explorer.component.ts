import { Component,OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/data.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  cargandoGames = false;

  listadoGames: Game[]=[];
  
  constructor(private data:GameService){

  }

  ngOnInit() {
    this.getGameListas();
  }

  get mensaje():string{
    if(this.cargandoGames){
      return 'Cargando...';
    }else{
      return this.listadoGames.length >0?
      `${this.listadoGames.length}.`:
      'No se han encontrado registros.'
    }
  }

  get importe(): string {
    if (this.cargandoGames) {
      return 'Cargando...';
    } else {
      if (this.listadoGames.length > 0) {
        const total = this.listadoGames.reduce((sum, game) => sum + game.Price, 0);
        return `${total}`;
      } else {
        return 'No se han encontrado registros..';
      }
    }
  }


  private getGameListas(){
    this.cargandoGames = true;
    this.data.getGameListas()
    .subscribe(x => {
      this.cargandoGames = false;
      this.listadoGames = x;
    });
  }

}
