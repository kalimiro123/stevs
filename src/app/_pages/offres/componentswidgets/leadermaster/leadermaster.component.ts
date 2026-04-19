import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-leadermaster',
  imports: [],
  templateUrl: './leadermaster.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadermasterComponent {
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
