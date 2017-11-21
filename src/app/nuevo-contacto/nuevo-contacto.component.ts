import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {

  // Para hacer una inyección de dependencias (en este caso de un servicio)
  // tenemos que indicar en el constructor de la clase el parámetro
  // correspondiente con el modificador de acceso (en este caso private) y
  // anotarlo con el tipo a inyectar (en este caso ContactosService).
  constructor(
    private _contactosService: ContactosService,
    private _router: Router) { }

  guardarContacto(contacto: Contacto): void {
    this._contactosService
        .crearContacto(contacto)
        .subscribe((contacto: Contacto) => {
          alert(`El contacto ${contacto.nombre} se ha creado correctamente.`);
          this._router.navigateByUrl('/todos');
        });
  }
}
