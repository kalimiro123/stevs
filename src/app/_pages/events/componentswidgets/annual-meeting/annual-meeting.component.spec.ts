import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMeetingComponent } from './annual-meeting.component';

describe('AnnualMeetingComponent', () => {
  let component: AnnualMeetingComponent;
  let fixture: ComponentFixture<AnnualMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnualMeetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualMeetingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
