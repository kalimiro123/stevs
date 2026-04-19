import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership-t',
  imports: [CommonModule],
  templateUrl: './leadership-t.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeadershipTComponent {
  // ── Cercle tab ──
  activeSlice: number = 1;
  selectSlice(index: number): void { this.activeSlice = index; }
}
