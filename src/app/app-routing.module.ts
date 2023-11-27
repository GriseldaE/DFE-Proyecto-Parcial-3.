import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ExplorerComponent } from './reporte-ventas/explorer/explorer.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [ 
  {path:'home',component: HomeComponent},
{path:'explorer', component: ExplorerComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
