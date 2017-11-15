import { Component, OnInit } from '@angular/core';

import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaContactos: string[];

  // Para hacer una inyección de dependencias (en este caso de un servicio)
  // tenemos que indicar en el constructor de la clase el parámetro
  // correspondiente con el modificador de acceso (en este caso private) y
  // anotarlo con el tipo a inyectar (en este caso ContactosService).
  constructor(private _contactosService: ContactosService) { }

  ngOnInit(): void {
    console.log('Soy AppComponent y acabo de despertarme');
    this.listaContactos = this._contactosService.obtenerContactos();
  }

  guardarContacto(contacto: Contacto): void {
    this._contactosService.crearContacto(contacto.nombre);
    this.listaContactos = this._contactosService.obtenerContactos();
  }

  borrarContacto(contacto: string): void {
    this._contactosService.eliminarContacto(contacto);
    this.listaContactos = this._contactosService.obtenerContactos();
  }
}
