import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponenteComponent } from './dashboard-componente.component';

describe('DashboardComponenteComponent', () => {
  let component: DashboardComponenteComponent;
  let fixture: ComponentFixture<DashboardComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
