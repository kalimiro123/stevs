import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { TalksComponent } from '../componentswidgets/talks/talks.component';
import { TabsEventsComponent } from '../componentswidgets/tabs-events/tabs-events.component';
import { AnnualMeetingComponent } from '../componentswidgets/annual-meeting/annual-meeting.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
    BreadcrumbComponent,
    TalksComponent,
    TabsEventsComponent,
    AnnualMeetingComponent
  ],
})
export default class Events {

}
