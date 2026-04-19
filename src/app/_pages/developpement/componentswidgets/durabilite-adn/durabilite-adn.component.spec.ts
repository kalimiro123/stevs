import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurabiliteADNComponent } from './durabilite-adn.component';

describe('DurabiliteADNComponent', () => {
  let component: DurabiliteADNComponent;
  let fixture: ComponentFixture<DurabiliteADNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DurabiliteADNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DurabiliteADNComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
