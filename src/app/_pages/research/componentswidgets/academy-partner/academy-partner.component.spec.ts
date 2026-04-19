import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyPartnerComponent } from './academy-partner.component';

describe('AcademyPartnerComponent', () => {
  let component: AcademyPartnerComponent;
  let fixture: ComponentFixture<AcademyPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyPartnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyPartnerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
