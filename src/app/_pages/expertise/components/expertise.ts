import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { GouvernanceComponent } from '../componentswidgets/gouvernance/gouvernance.component';
import { StrategieComponent } from '../componentswidgets/strategie/strategie.component';
import { TimelineComponent } from '../componentswidgets/timeline/timeline.component';
import { SyringeComponent } from '../componentswidgets/syringe/syringe.component';
import { ManagehumainComponent } from '../componentswidgets/managehumain/managehumain.component';
import { LeadershipTComponent } from '../componentswidgets/leadership-t/leadership-t.component';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.html',
  styleUrls: ['./expertise.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
    BreadcrumbComponent,
    GouvernanceComponent,
    StrategieComponent,
    TimelineComponent,
    SyringeComponent,
    ManagehumainComponent,
    LeadershipTComponent
  ],
  standalone: true,
})
export default class Expertise {

  

  


  

}