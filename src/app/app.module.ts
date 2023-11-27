import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReporteVentasModule } from './reporte-ventas/reporte-ventas.module';
import { GameService } from './services/data.service';
import {HttpClientModule } from '@angular/common/http';
import { ErrorModule } from './error/error.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
ErrorModule,
    DashboardModule,
    ReporteVentasModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
