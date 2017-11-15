import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioContactoComponent {

  formularioContacto: FormGroup;

  @Output() botonGuardarPulsado = new EventEmitter<Contacto>();

  // Para crear formularios reactivos nos podemos apoyar en
  // la clase 'FormBuilder' que debemos solicitar a Angular
  // como inyección de dependencias.
  constructor(private _formBuilder: FormBuilder) {
    this._crearFormulario();
  }

  // Hacemos uso de la función 'group()' del 'FormBuilder'
  // para crear un formulario basado en la definición que
  // especifiquemos. Esa definición no es más que un objeto
  // JSON donde se indican como propiedades los controles
  // que va a tener el formulario. Podemos, además, indicar
  // validadores a nivel de control.
  private _crearFormulario(): void {
    this.formularioContacto = this._formBuilder.group({
      nombre: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }],
      apellidos: '',
      telefono: '',
      email: '',
      facebook: '',
      twitter: ''
    });
  }

  notificarCreacionContacto(): void {
    let contacto = this.formularioContacto.value as Contacto;
    this.botonGuardarPulsado.emit(contacto);
  }

}
