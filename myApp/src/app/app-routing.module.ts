import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular1Component } from './angular1/angular1.component';
import { Angular2Component } from './angular2/angular2.component';
import { Angular3Component } from './angular3/angular3.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: "one", component: Angular1Component },
  { path: "two", component: Angular2Component },
  { path: "three", component: Angular3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
