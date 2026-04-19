import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationReportComponent } from './orientation-report.component';

describe('OrientationReportComponent', () => {
  let component: OrientationReportComponent;
  let fixture: ComponentFixture<OrientationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrientationReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrientationReportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
