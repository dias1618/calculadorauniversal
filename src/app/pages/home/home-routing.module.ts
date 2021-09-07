import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes), 
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent
  ]
})
export class HomeRoutingModule { }
