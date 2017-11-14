import {
  Input,
  Component,
  ViewEncapsulation,
  Output,
  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaContactosComponent {

  // Decoramos con '@Input' aquellos atributos en los cuales
  // un componente padre pueda enlazar datos.
  @Input() contactos: string[];

  // Decoramos con '@Output' aquellos atributos que vayan a
  // emitir datos a un componente padre. Además, estos atributos
  // deben ser de tipo 'EventEmitter<T>'.
  @Output() botonEliminarPulsado = new EventEmitter<string>();

  notificarContactoEliminar(contacto: string): void {

    // Para emitir un datos, usamos la función 'emit()' del 'EventEmitter'.
    this.botonEliminarPulsado.emit(contacto);
  }
}
