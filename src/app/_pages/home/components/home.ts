import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeroComponent } from '../componentswidgets/hero/hero.component';
import { IdentityComponent } from '../componentswidgets/identity/identity.component';
import { MissionComponent } from '../componentswidgets/mission/mission.component';
import { ValuesComponent } from '../componentswidgets/values/values.component';
import { RaisonComponent } from '../componentswidgets/raison/raison.component';
import { MembersComponent } from '../componentswidgets/members/members.component';
import { ExpertTeamComponent } from '../componentswidgets/expert-team/expert-team.component';
import { RegionalComponent } from '../componentswidgets/regional/regional.component';
import { StatsComponent } from '../componentswidgets/stats/stats.component';
import { PartnersComponent } from '../componentswidgets/partners/partners.component';
import { TmiNewsletterComponent } from '../componentswidgets/tmi-newsletter/tmi-newsletter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
    HeroComponent,
    IdentityComponent,
    MissionComponent,
    ValuesComponent,
    RaisonComponent,
    MembersComponent,
    ExpertTeamComponent,
    RegionalComponent,
    StatsComponent,
    PartnersComponent,
    TmiNewsletterComponent],
})
export default class Home {
  
}
