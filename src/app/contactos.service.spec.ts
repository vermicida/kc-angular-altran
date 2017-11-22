import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { ContactosService } from './contactos.service';

describe('ContactosService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        ContactosService
      ]
    });
  });

  it('debería instanciarse', inject([ContactosService], (service: ContactosService) => {
    expect(service).toBeTruthy();
  }));

});
