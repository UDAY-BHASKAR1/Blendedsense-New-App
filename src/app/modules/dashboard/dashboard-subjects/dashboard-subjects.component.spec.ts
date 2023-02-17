import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSubjectsComponent } from './dashboard-subjects.component';

describe('DashboardSubjectsComponent', () => {
  let component: DashboardSubjectsComponent;
  let fixture: ComponentFixture<DashboardSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
