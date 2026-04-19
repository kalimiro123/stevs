import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-syringe',
  imports: [CommonModule],
  templateUrl: './syringe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyringeComponent {
  // ── Syringe tabs ──
  activeTab: number = 0;

  selectTab(index: number): void {
    this.activeTab = index;
  }
}
