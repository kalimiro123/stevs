import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramoriginComponent } from './programorigin.component';

describe('ProgramoriginComponent', () => {
  let component: ProgramoriginComponent;
  let fixture: ComponentFixture<ProgramoriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramoriginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramoriginComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
