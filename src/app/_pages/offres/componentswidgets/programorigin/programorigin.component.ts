import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  AfterViewInit
} from '@angular/core';



@Component({
  selector: 'app-programorigin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programorigin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgramoriginComponent implements AfterViewInit {
  protected activeTab = 1;

  protected setTab(tab: number) {
    this.activeTab = tab;
  }


  ngAfterViewInit(): void {}

  /** video tab content **/
}