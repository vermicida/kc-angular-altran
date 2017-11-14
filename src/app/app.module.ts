import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

@NgModule({
  // En el metadato 'declarations' indicamos todos los componentes, directivas y
  // pipes de nuestra app. Si no los añadimos, nuestra app (módulo) no sabrá
  // cómo pintarlos en pantalla o cómo utilizarlos.
  declarations: [
    AppComponent,
    ListaContactosComponent
  ],
  // En el metadato 'imports' indicamos todos aquellos módulos de los cuáles depende
  // nuestra app para funcionar.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // En el metadato 'providers' añadimos los proveedores de aquellas servicios, clases
  // y valores que quieran inyectarse como dependencias en alguna pieza de nuestra app.
  // De no hacerlo, Angular no sabrá cómo instanciar aquella dependencia que le estamos
  // pidiendo.
  providers: [],
  // En el metadato 'bootstrap' establecemos el componente raíz de nuestra app.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
