import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnmesureComponent } from './accompagnmesure.component';

describe('AccompagnmesureComponent', () => {
  let component: AccompagnmesureComponent;
  let fixture: ComponentFixture<AccompagnmesureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccompagnmesureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompagnmesureComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
