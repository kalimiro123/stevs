import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsEventsComponent } from './tabs-events.component';

describe('TabsEventsComponent', () => {
  let component: TabsEventsComponent;
  let fixture: ComponentFixture<TabsEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsEventsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
