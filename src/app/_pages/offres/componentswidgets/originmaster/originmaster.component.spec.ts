import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginmasterComponent } from './originmaster.component';

describe('OriginmasterComponent', () => {
  let component: OriginmasterComponent;
  let fixture: ComponentFixture<OriginmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginmasterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
