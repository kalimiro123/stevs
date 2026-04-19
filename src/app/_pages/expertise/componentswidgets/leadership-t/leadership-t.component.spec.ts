import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipTComponent } from './leadership-t.component';

describe('LeadershipTComponent', () => {
  let component: LeadershipTComponent;
  let fixture: ComponentFixture<LeadershipTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadershipTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipTComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
