import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page1Component } from './pages/page-1/page-1.component';

const routes: Routes = [
  {
    path:"flatComplex",
    component:Page1Component,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
