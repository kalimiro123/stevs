import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencepersoComponent } from './experienceperso.component';

describe('ExperiencepersoComponent', () => {
  let component: ExperiencepersoComponent;
  let fixture: ComponentFixture<ExperiencepersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencepersoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencepersoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
