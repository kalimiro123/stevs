import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmiNewsletterComponent } from './tmi-newsletter.component';

describe('TmiNewsletterComponent', () => {
  let component: TmiNewsletterComponent;
  let fixture: ComponentFixture<TmiNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TmiNewsletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmiNewsletterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
