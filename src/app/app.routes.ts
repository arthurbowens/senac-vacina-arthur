import { Routes } from '@angular/router';

export const routes: Routes = [
  //{ path: '', redirectTo: 'vacinas', pathMatch: 'full'},
  //{ path: 'vacinas', loadChildren:() => import('./vacinas/vacinas.module').then(m => m.VacinasModule)},

  { path: '', redirectTo: 'carros', pathMatch: 'full'},
  { path: 'carros', loadChildren:() => import('./carros/carros.module').then(m => m.CarrosModule)},

];
