import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsocietalesComponent } from './contributionsocietales.component';

describe('ContributionsocietalesComponent', () => {
  let component: ContributionsocietalesComponent;
  let fixture: ComponentFixture<ContributionsocietalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributionsocietalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributionsocietalesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
