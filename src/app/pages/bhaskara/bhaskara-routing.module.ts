import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BhaskaraComponent } from './bhaskara.component';

const routes: Routes = [
  {path: '', component: BhaskaraComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [
    BhaskaraComponent
  ]
})
export class BhaskaraRoutingModule { }
