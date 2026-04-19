import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionLaboComponent } from './mission-labo.component';

describe('MissionLaboComponent', () => {
  let component: MissionLaboComponent;
  let fixture: ComponentFixture<MissionLaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionLaboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionLaboComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
