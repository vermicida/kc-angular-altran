import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaContactos: string[] = [
    'Bill Gates',
    'Tim Cook',
    'Elon Musk',
    'Steve Wozniak',
    'Sundar Pichai'
  ];

  ngOnInit(): void {
    console.log('Soy AppComponent y acabo de despertarme');
  }

  eliminarContacto(contacto: string): void {
    this.listaContactos = this.listaContactos.filter(c => c !== contacto);
  }
}
