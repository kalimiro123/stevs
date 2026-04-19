import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-policy-section',
  standalone: true,        
  imports: [CommonModule],  
  templateUrl: './policy-section.component.html',
})
export class PolicySectionComponent {
  protected activeTab = 1;

  protected setTab(tab: number) {
    this.activeTab = tab;
  }

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

