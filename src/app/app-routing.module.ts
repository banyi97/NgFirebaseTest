import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './routeA/routeA.component';
import { RouteBComponent } from './routeB/routeB.component';

const routes: Routes = [
  {
    path: 'routeA',
    component: RouteAComponent
  },
  {
    path: 'routeB',
    component: RouteBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
