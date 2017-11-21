import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  contactos$: Observable<Contacto[]>;
  contactoSeleccionado: Contacto;

  constructor(private _contactosService: ContactosService) { }

  ngOnInit() {
    this._recuperarContactosDesdeServidor();
  }

  private _recuperarContactosDesdeServidor(): void {
    this.contactos$ = this._contactosService.obtenerContactos();
  }

  verDetallesContacto(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }

  preguntarEliminarContacto(contacto: Contacto): void {

    // Preguntamos al usuario si realmente quiere eliminar el contacto.
    if (confirm(`¿Deseas realmente eliminar a ${contacto.nombre} ${contacto.apellidos}?`)) {

      // En tal caso, lo eliminamos.
      this._contactosService
          .eliminarContacto(contacto)
          .subscribe(() => {

            // Una vez la petición HTTP de eliminación ha
            // terminado, deseleccionamos el contacto eliminado...
            this.contactoSeleccionado = null;

            // ...y refrescamos la lista principal.
            this._recuperarContactosDesdeServidor();
          });
    }
  }

}
