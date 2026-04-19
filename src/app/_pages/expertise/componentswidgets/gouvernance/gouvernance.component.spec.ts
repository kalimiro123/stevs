import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GouvernanceComponent } from './gouvernance.component';

describe('GouvernanceComponent', () => {
  let component: GouvernanceComponent;
  let fixture: ComponentFixture<GouvernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GouvernanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GouvernanceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
