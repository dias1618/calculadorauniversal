import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/pages/shared/header/header.component';

let components = [
  HeaderComponent,
]

let modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  FlexLayoutModule,
  RouterModule,
]

@NgModule({
  entryComponents: [
    ...components
  ],
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [
  ]
})
export class SharedModule { }
