import { Injectable } from '@angular/core';

// Las clases decoradas con '@Injectable' se comportan como
// servicios. Es necesario añadir los servicios al metadato
// 'providers' del módulo para que Angular sepa cómo tiene
// que instanciar estos servicios cuando se pidan como
// inyección de dependencia.
@Injectable()
export class ContactosService {

  private _listaContactos: string[] = [
    'Bill Gates',
    'Tim Cook',
    'Elon Musk',
    'Steve Wozniak',
    'Sundar Pichai'
  ];

  obtenerContactos(): string[] {
    return this._listaContactos;
  }

  eliminarContacto(contacto: string): void {
    this._listaContactos = this._listaContactos.filter(c => c !== contacto);
  }
}
