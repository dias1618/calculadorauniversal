import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule),
  },
  {
    path: 'imc', loadChildren: () => import('./pages/imc/imc.module').then(m=>m.ImcModule),
  },
  {
    path: 'cambio', loadChildren: () => import('./pages/cambio/cambio.module').then(m=>m.CambioModule),
  },
  {
    path: 'bhaskara', loadChildren: () => import('./pages/bhaskara/bhaskara.module').then(m=>m.BhaskaraModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
