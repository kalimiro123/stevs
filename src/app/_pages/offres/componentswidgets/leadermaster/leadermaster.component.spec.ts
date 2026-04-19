import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadermasterComponent } from './leadermaster.component';

describe('LeadermasterComponent', () => {
  let component: LeadermasterComponent;
  let fixture: ComponentFixture<LeadermasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadermasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadermasterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
