import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarroListaComponent } from './carros-lista/carros-lista.component';
import { CarrosRoutingModule } from './carros-routing.module';
import { CarroMontadoraComponent } from './carros-montadoras/carros-montadoras.component';



@NgModule({
  declarations: [CarroListaComponent, CarroMontadoraComponent],
  imports: [
    CommonModule,
    FormsModule,
    CarrosRoutingModule
  ]
})
export class CarrosModule { }
