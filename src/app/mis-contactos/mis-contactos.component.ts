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
    this.contactos$ = this._contactosService.obtenerContactos();
  }

  verDetallesContacto(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }

  // TODO: Este manejador lo debemos mover al componente
  // de detalles de contacto cuando esté listo.

  // borrarContacto(contacto: Contacto): void {
    // this._contactosService.eliminarContacto(contacto);
    // this.listaContactos = this._contactosService.obtenerContactos();
  // }

}
