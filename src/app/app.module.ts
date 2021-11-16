import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteAComponent } from './routeA/routeA.component';
import { RouteBComponent } from './routeB/routeB.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    RouteBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
