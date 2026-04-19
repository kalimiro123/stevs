import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyringeComponent } from './syringe.component';

describe('SyringeComponent', () => {
  let component: SyringeComponent;
  let fixture: ComponentFixture<SyringeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyringeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyringeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
