import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { ExerciceComponent } from './components/exercice/exercice.component';
import { Exo1Component } from './components/exercice/exo1/exo1.component';
import { HomeComponent } from './components/home/home.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "demo", component : DemoComponent, children : [
    {path : "demo1", component : Demo1Component},
    {path : "demo2", canActivate : [AuthGuard], component : Demo2Component},
    {path : "demo3", component : Demo3Component},
    {path : "demo4", component : Demo4Component},
    {path : "demo5", component : Demo5Component},
  ]},
  {path : "exercice", component : ExerciceComponent, children : [
    {path : "exo1", component : Exo1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
