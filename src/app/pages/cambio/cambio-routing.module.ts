import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CambioComponent } from './cambio.component';

const routes: Routes = [
  {path: '', component: CambioComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [
    CambioComponent
  ]
})
export class CambioRoutingModule { }
