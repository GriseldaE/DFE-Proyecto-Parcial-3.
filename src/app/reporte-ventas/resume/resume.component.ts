import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GameInterface } from 'src/app/services/game.interface';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input() mensaje: string = '';
  @Input() data!:GameInterface[];
  @Input() totalSold!:number;
  @Input() importe:string ='';
  ngOnInit(){
    console.log("object");
    
  }
}
