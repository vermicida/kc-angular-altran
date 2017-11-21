import {
  Component,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  // Decoramos con '@Output' aquellos atributos que vayan a
  // emitir datos a un componente padre. Además, estos atributos
  // deben ser de tipo 'EventEmitter<T>'.
  @Output() botonEliminarPulsado = new EventEmitter<Contacto>();

  @Input() contacto: Contacto;

  navegarPerfilFacebook(): void {
    const ruta = `https://www.facebook.com/${this.contacto.facebook}`;
    window.open(ruta, '_blank');
  }

  navegarPerfilTwitter(): void {
    const ruta = `https://twitter.com/${this.contacto.twitter}`;
    window.open(ruta, '_blank');
  }

  notificarContactoEliminar(): void {
    // Para emitir un datos, usamos la función 'emit()' del 'EventEmitter'.
    this.botonEliminarPulsado.emit(this.contacto);
  }
}
