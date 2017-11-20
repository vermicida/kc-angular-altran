import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MisContactosComponent implements OnInit {

  contactos$: Observable<Contacto[]>;

  constructor(private _contactosService: ContactosService) { }

  ngOnInit() {
    this.contactos$ = this._contactosService.obtenerContactos();
  }

  borrarContacto(contacto: Contacto): void {
    // this._contactosService.eliminarContacto(contacto);
    // this.listaContactos = this._contactosService.obtenerContactos();
  }

}
