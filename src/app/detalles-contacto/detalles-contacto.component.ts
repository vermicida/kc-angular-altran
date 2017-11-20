import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;

}
