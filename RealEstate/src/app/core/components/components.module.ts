import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HeaderImagesComponent } from './header-images/header-images.component';



@NgModule({
  declarations: [
    NavComponent,
    HeaderImagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
