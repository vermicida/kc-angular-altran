import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Usamos bloques 'describe' para organizar nuestros tests. Lo ideal
// es que los bloques 'it' que agrupe estén relacionados de alguna forma,
// pero esto es totalmente libre: no hay límite en cuanto a organización.
// Podremos tener, además, tantos bloques 'describe' como consideremos
// en nuestros documentos de especificación.
describe('AppComponent', () => {

  // En un bloque 'beforeEach' establecemos todo aquel código que
  // deba ejecutarse previamente a cada uno de los tests que tenemos
  // en el bloque 'describe'. Suele usarse para preparar el contexto
  // necesario para los tests: instanciar el módulo de la app, por ejemplo.
  beforeEach(async(() => {

    // La herramienta 'TestBed' nos ayuda a preparar el módulo de testing de
    // nuestra app. Además, nos apoyamos en ella también para hacer la instanciación
    // de los componentes y poder así hacer tests sobre ellos.
    // Con la función 'cunfigureTestingModule()' configuramos el módulo con
    // aquello que vayamos a necesitar; no es necesario especificar todos los
    // metadatos (y contenido de los mismos) del 'NgModule'.
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // Los bloques 'it' definen los tests que contempla nuestra aplicación. Cada
  // bloque 'it' es un test. Podemos tener tantos como queramos en nuestros
  // bloques 'describe'. Es importante respetar la convención de títulos que
  // debemos dar a nuestros tests: 'should...' / 'debería...'
  it('debería instanciarse', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // En 'expect' especificamos qué esperamos como resultado de la ejecución
    // del test. Jasmine ofrece muchas funciones para validar los datos que
    // participan en los tests.
    expect(app).toBeTruthy();
  }));

  // Si queremos omitir temporalmente la ejecución de un test (bloque 'it') o un
  // grupo de tests (bloque 'describe'), indicamos una 'x' por delante del bloque.
  // Cuando Karma lea los documentos de especificación, omitirá todo aquello que
  // esté marcado como 'xdescribe' o 'xit'.
  xit(`debería tener un atributo 'title' con el texto 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('debería escribir el título en un elemento H1', async(() => {

    // Para instanciar un componente, lo hacemos con la función 'createComponent()'
    // de 'TestBed'. El fixture que nos retorna esta función nos da acceso tanto
    // al componente (propiedad 'componentInstance') como a su template (proiedad
    // 'debugElement').
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Super Agenda');
  }));

});
