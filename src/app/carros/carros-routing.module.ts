import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroListaComponent } from './carros-lista/carros-lista.component';
import { CarroMontadoraComponent } from './carros-montadoras/carros-montadoras.component';


const routes: Routes = [
  { path: '', component: CarroListaComponent},
  { path: '', component: CarroMontadoraComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }


