import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { MissionLaboComponent } from '../componentswidgets/mission-labo/mission-labo.component';
import { ProgrammeSearchComponent } from '../componentswidgets/programme-search/programme-search.component';
import { TeamSearchComponent } from '../componentswidgets/team-search/team-search.component';
import { AcademyPartnerComponent } from '../componentswidgets/academy-partner/academy-partner.component';
import { OrientationReportComponent } from '../componentswidgets/orientation-report/orientation-report.component';
import { PublicationLaboComponent } from '../componentswidgets/publication-labo/publication-labo.component';

@Component({
  selector: 'app-research',
  templateUrl: './research.html',
  styleUrls: ['./research.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
    BreadcrumbComponent,
    MissionLaboComponent,
    ProgrammeSearchComponent,
    TeamSearchComponent,
    AcademyPartnerComponent,
    OrientationReportComponent,
    PublicationLaboComponent
  ],
})
export default class Research {

}
