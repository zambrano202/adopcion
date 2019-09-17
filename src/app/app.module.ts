

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    BodyComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
