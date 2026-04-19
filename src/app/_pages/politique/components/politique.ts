import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { PolicySectionComponent } from '../componentswidgets/policy-section/policy-section';

@Component({
  selector: 'app-politique',
  templateUrl: './politique.html',
  styleUrls: ['./politique.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PolicySectionComponent
  ],
})
export default class Politique {

  protected activeTab = 1;

  protected setTab(tab: number) {
    this.activeTab = tab;
  }


  
  // ── Accordion ──
  toggleItem(event: MouseEvent): void {
    const btn = event.currentTarget as HTMLElement;
    const item = btn.closest('.gov-accordion-item') as HTMLElement;
    item.classList.toggle('open');

    const icon = btn.querySelector('i.toggle-icon') as HTMLElement;
    if (item.classList.contains('open')) {
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus');
    } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  }

}
