import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [ //componentes
    AppComponent
  ],
  imports: [ //modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  
  providers: [],//servicios especificos a un módulo
  bootstrap: [AppComponent] //modulo principal
})
export class AppModule { }
