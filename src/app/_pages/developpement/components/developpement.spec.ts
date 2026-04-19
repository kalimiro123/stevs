import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developpement } from './developpement';

describe('Developpement', () => {
  let component: Developpement;
  let fixture: ComponentFixture<Developpement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Developpement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developpement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
