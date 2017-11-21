import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-detalles-contacto',
  templateUrl: './detalles-contacto.component.html',
  styleUrls: ['./detalles-contacto.component.css']
})
export class DetallesContactoComponent {

  @Input() contacto: Contacto;

  navegarPerfilFacebook(): void {
    const ruta = `https://www.facebook.com/${this.contacto.facebook}`;
    window.open(ruta, '_blank');
  }

  navegarPerfilTwitter(): void {
    const ruta = `https://twitter.com/${this.contacto.twitter}`;
    window.open(ruta, '_blank');
  }
}
