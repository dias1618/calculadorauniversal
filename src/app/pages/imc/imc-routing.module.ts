import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImcComponent } from './imc.component';

const routes: Routes = [
  {path: '', component: ImcComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  declarations: [
    ImcComponent
  ]
})
export class ImcRoutingModule { }
