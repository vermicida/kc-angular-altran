import { Injectable } from '@angular/core';

import { Contacto } from './contacto';

// Las clases decoradas con '@Injectable' se comportan como
// servicios. Es necesario añadir los servicios al metadato
// 'providers' del módulo para que Angular sepa cómo tiene
// que instanciar estos servicios cuando se pidan como
// inyección de dependencia.
@Injectable()
export class ContactosService {

  private _listaContactos: Contacto[] = [
    {
      id: 1,
      nombre: 'Bill',
      apellidos: 'Gates'
    },
    {
      id: 2,
      nombre: 'Tim',
      apellidos: 'Cook'
    },
    {
      id: 3,
      nombre: 'Elon',
      apellidos: 'Musk'
    },
    {
      id: 4,
      nombre: 'Steve',
      apellidos: 'Wozniak'
    },
    {
      id: 5,
      nombre: 'Sundar',
      apellidos: 'Pichai'
    }
  ];

  obtenerContactos(): Contacto[] {
    return this._listaContactos;
  }

  crearContacto(contacto: Contacto): void {
    this._listaContactos.push(contacto);
  }

  eliminarContacto(contacto: Contacto): void {
    this._listaContactos = this._listaContactos.filter(c => c.id !== contacto.id);
  }
}
