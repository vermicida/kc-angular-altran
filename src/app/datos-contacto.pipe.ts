import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto';

// Los Pipes son clases decoradas con el decorador '@Pipe'. Es necesario
// indicar el metadato 'name'; en él establecemos el nombre del Pipe, que
// será el que usemos en un template para aplicarlo.

// También, un Pipe debe implementar la interfaz 'PipeTransform' y, por ende,
// la función 'tranform()'. Este función espera al menos un parámetro: el
// dato que va a transformarse. Podemos indicar otros argumentos más para
// configurar o modificar el proceso de transformación.

@Pipe({
  name: 'DatosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  transform(contacto: Contacto): string {

    let datos: string;

    // Si tenemos los dos datos (teléfono y email), debemos retornar 'teléfono || email'.
    if (contacto.telefono && contacto.email) {
      datos = `${contacto.telefono} || ${contacto.email}`;
    }

    // Si solo tenemos uno de los datos, lo retornamos tal cual.
    else if (contacto.telefono) {
      datos = contacto.telefono;
    }
    else if (contacto.email) {
      datos = contacto.email;
    }

    // Por último, si no tenemos ninguno, retornamos una cadena de texto vacía.
    else {
      datos = '';
    }

    return datos;
  }

}
