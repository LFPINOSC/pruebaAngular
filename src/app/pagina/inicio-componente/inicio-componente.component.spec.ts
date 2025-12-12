import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponenteComponent } from './inicio-componente.component';

describe('InicioComponenteComponent', () => {
  let component: InicioComponenteComponent;
  let fixture: ComponentFixture<InicioComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
