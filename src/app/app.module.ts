import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';

@NgModule({
  // En el metadato 'declarations' indicamos todos los componentes, directivas y
  // pipes de nuestra app. Si no los añadimos, nuestra app (módulo) no sabrá
  // cómo pintarlos en pantalla o cómo utilizarlos.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioContactoComponent,
    NuevoContactoComponent,
    MisContactosComponent
  ],
  // En el metadato 'imports' indicamos todos aquellos módulos de los cuáles depende
  // nuestra app para funcionar.
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Es necesario importar el módulo 'ReactiveFormsModule'
    // para trabajar con formularios reactivos.
    ReactiveFormsModule
  ],
  // En el metadato 'providers' añadimos los proveedores de aquellos servicios, clases
  // y valores que quieran inyectarse como dependencias en alguna pieza de nuestra app.
  // De no hacerlo, Angular no sabrá cómo instanciar aquella dependencia que le estamos
  // pidiendo.
  providers: [
    ContactosService
  ],
  // En el metadato 'bootstrap' establecemos el componente raíz de nuestra app.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
