import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { LeadermasterComponent } from '../componentswidgets/leadermaster/leadermaster.component';
import { OriginmasterComponent } from '../componentswidgets/originmaster/originmaster.component';
import { TypemasterComponent } from '../componentswidgets/typemaster/typemaster.component';
import { ExperiencepersoComponent } from '../componentswidgets/experienceperso/experienceperso.component';
import { ProgramoriginComponent } from '../componentswidgets/programorigin/programorigin.component';
import { AccompagnmesureComponent } from '../componentswidgets/accompagnmesure/accompagnmesure.component';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule,
      BreadcrumbComponent,
      LeadermasterComponent,
      OriginmasterComponent,
      TypemasterComponent,
      ExperiencepersoComponent,
      ProgramoriginComponent,
      AccompagnmesureComponent
    ],
})
export default class Offre {

}
