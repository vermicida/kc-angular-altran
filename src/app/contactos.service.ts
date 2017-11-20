import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Contacto } from './contacto';
import { environment } from '../environments/environment';

// Las clases decoradas con '@Injectable' se comportan como
// servicios. Es necesario añadir los servicios al metadato
// 'providers' del módulo para que Angular sepa cómo tiene
// que instanciar estos servicios cuando se pidan como
// inyección de dependencia.
@Injectable()
export class ContactosService {

  // Para utilizar el cliente HTTP debemos hacer la
  // inyección de dependencia de la clase 'HttpClient'.
  constructor(private _httpClient: HttpClient) { }

  obtenerContactos(): Observable<Contacto[]> {
    // El cliente HTTP expone funciones para cada uno de los
    // verbos que están soportados en este protocolo. Estas
    // funciones soportan genéricos, por tanto debemos indicar
    // el tipo de dato que estamos esperando de servidor. Además,
    // estas funciones empaquetan la operación en un objeto
    // 'Observable'; es necesario suscribirse al mismo para que
    // la petición HTTP se ejecute.
    return this._httpClient.get<Contacto[]>(`${environment.rutaApi}/contactos`);
  }

  crearContacto(contacto: Contacto): Observable<Contacto> {
    return this._httpClient.post<Contacto>(`${environment.rutaApi}/contactos`, contacto);
  }

  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._httpClient.delete<Contacto>(`${environment.rutaApi}/contactos/${contacto.id}`);
  }
}
