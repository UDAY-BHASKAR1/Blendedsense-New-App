import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSweepblocksComponent } from './dashboard-sweepblocks.component';

describe('DashboardSweepblocksComponent', () => {
  let component: DashboardSweepblocksComponent;
  let fixture: ComponentFixture<DashboardSweepblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSweepblocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSweepblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
