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

  // TODO: Este EventEmitter y manejador los debemos mover
  // al componente de detalles de contacto cuando esté listo.

  // Decoramos con '@Output' aquellos atributos que vayan a
  // emitir datos a un componente padre. Además, estos atributos
  // deben ser de tipo 'EventEmitter<T>'.
  // @Output() botonEliminarPulsado = new EventEmitter<Contacto>();

  // notificarContactoEliminar(contacto: Contacto): void {
    // Para emitir un datos, usamos la función 'emit()' del 'EventEmitter'.
    // this.botonEliminarPulsado.emit(contacto);
  // }

}
