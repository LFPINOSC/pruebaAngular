import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalComponenteComponent } from './pagina-principal-componente.component';

describe('PaginaPrincipalComponenteComponent', () => {
  let component: PaginaPrincipalComponenteComponent;
  let fixture: ComponentFixture<PaginaPrincipalComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrincipalComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrincipalComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
