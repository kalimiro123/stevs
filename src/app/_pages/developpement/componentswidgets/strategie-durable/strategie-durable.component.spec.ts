import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieDurableComponent } from './strategie-durable.component';

describe('StrategieDurableComponent', () => {
  let component: StrategieDurableComponent;
  let fixture: ComponentFixture<StrategieDurableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategieDurableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategieDurableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
