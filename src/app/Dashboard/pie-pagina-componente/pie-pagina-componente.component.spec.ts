import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePaginaComponenteComponent } from './pie-pagina-componente.component';

describe('PiePaginaComponenteComponent', () => {
  let component: PiePaginaComponenteComponent;
  let fixture: ComponentFixture<PiePaginaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiePaginaComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePaginaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
