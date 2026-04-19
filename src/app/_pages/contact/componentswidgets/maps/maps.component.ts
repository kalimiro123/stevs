import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  imports: [GoogleMapsModule],
  templateUrl: './maps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapsComponent {

}
