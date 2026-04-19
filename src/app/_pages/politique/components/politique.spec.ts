import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politique } from './politique';

describe('Politique', () => {
  let component: Politique;
  let fixture: ComponentFixture<Politique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Politique]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Politique);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
