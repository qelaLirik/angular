import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page-1/page-1.component';
import { NavComponent } from './core/components/nav/nav.component';
import { HeaderImagesComponent } from './core/components/header-images/header-images.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    NavComponent,
    HeaderImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
