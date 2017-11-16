import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';

// El routing de nuestra app se hace indicando rutas en la constante
// de tipo 'Routes' que tenemos en el módulo 'AppRoutingModule'. Las
// rutas no son más que pares de 'path' y 'component'; en 'path' indicamos
// la ruta a navegar y en 'component' indicamos el componente que se
// pintará cuando se navegue la ruta.
const routes: Routes = [
  {
    path: 'nuevo',
    component: NuevoContactoComponent
  },
  {
    path: 'todos',
    component: MisContactosComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'todos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
