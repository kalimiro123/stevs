import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-tabs-events',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './tabs-events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsEventsComponent {
  customOptions = {
    loop: true,
    margin: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false, // disable arrows (we fix that below)
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 600, // smooth animation
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  };
}
