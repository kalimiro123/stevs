import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemasterComponent } from './typemaster.component';

describe('TypemasterComponent', () => {
  let component: TypemasterComponent;
  let fixture: ComponentFixture<TypemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypemasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypemasterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
