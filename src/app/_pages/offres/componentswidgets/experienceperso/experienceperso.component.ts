import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experienceperso',
  standalone: true,        
  imports: [CommonModule], 
  templateUrl: './experienceperso.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencepersoComponent {

}
