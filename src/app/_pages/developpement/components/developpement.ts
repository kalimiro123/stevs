import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { DurabiliteADNComponent } from '../componentswidgets/durabilite-adn/durabilite-adn.component';
import { StrategieDurableComponent } from '../componentswidgets/strategie-durable/strategie-durable.component';
import { ContributionsocietalesComponent } from '../componentswidgets/contributionsocietales/contributionsocietales.component';

@Component({
  selector: 'app-developpement',
  templateUrl: './developpement.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
    BreadcrumbComponent,
    DurabiliteADNComponent,
    StrategieDurableComponent,
    ContributionsocietalesComponent
  ],
})
export default class Developpement {

}
