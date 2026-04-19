import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeSearchComponent } from './programme-search.component';

describe('ProgrammeSearchComponent', () => {
  let component: ProgrammeSearchComponent;
  let fixture: ComponentFixture<ProgrammeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammeSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammeSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
