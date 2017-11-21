import {
  Input,
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  sentidoOrdenacion = 'asc';

  // Decoramos con '@Input' aquellos atributos en los cuales
  // un componente padre pueda enlazar datos.
  @Input() contactos: Contacto[];

  @Output() contactoSeleccionado = new EventEmitter<Contacto>();

  notificarContactoSeleccionado(contacto: Contacto): void {
    this.contactoSeleccionado.emit(contacto);
  }

  cambiarSentidoOrdenacion(): void {
    this.sentidoOrdenacion = this.sentidoOrdenacion === 'asc' ? 'desc' : 'asc';
  }

}
