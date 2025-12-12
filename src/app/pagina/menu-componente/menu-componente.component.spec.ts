import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponenteComponent } from './menu-componente.component';

describe('MenuComponenteComponent', () => {
  let component: MenuComponenteComponent;
  let fixture: ComponentFixture<MenuComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
