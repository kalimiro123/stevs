import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliationLaboComponent } from './publication-labo.component';

describe('PubliationLaboComponent', () => {
  let component: PubliationLaboComponent;
  let fixture: ComponentFixture<PubliationLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubliationLaboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubliationLaboComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
