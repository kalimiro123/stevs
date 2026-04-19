import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagehumainComponent } from './managehumain.component';

describe('ManagehumainComponent', () => {
  let component: ManagehumainComponent;
  let fixture: ComponentFixture<ManagehumainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagehumainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagehumainComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
