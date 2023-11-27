import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListiningComponent } from './listining/listining.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';
import { DetallesComponent } from './detalles/detalles.component';
import { GameService } from '../services/data.service';



@NgModule({
  declarations: [
    ListiningComponent,
    ExplorerComponent,
    ResumeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    GameService
  ],
  exports:[
    ExplorerComponent
  ]
})
export class ReporteVentasModule { }
