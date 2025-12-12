import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaComponenteComponent } from './noticia-componente.component';

describe('NoticiaComponenteComponent', () => {
  let component: NoticiaComponenteComponent;
  let fixture: ComponentFixture<NoticiaComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiaComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
