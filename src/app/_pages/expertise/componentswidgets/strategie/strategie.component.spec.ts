import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieComponent } from './strategie.component';

describe('StrategieComponent', () => {
  let component: StrategieComponent;
  let fixture: ComponentFixture<StrategieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategieComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
