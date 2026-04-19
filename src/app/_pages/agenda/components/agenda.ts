import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CarouselModule
  ],
})
export default class Agenda {
  @ViewChild('timelineList') timelineList!: ElementRef;

  selectedDate = new Date();

  countries = ['Maroc', 'France', 'USA'];
  timezones = ['GMT+1', 'GMT+2', 'UTC'];

  selectedCountry = '';
  selectedTimezone = '';



  customOptions = {
    loop: true,
    margin: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: true,
    center:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    smartSpeed: 600,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };








  activeIndex: number | null = null;

  

  toggleEvent(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  scrollUp() {
    this.timelineList.nativeElement.scrollBy({
      top: -200,
      behavior: 'smooth'
    });
  }

  scrollDown() {
    this.timelineList.nativeElement.scrollBy({
      top: 200,
      behavior: 'smooth'
    });
  }
}
