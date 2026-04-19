import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HeaderBehaviorDirective } from './header-behavior.directive';

declare global {
  interface Window {
    $: any;
  }
}

@Component({
  selector: 'app-header',
  styleUrls: ['./header.css'],
  templateUrl: './header.html',
  imports: [RouterLink, HeaderBehaviorDirective, RouterModule],
})
export class Header implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    /*if (isPlatformBrowser(this.platformId)) {
      const checkJQuery = () => {
        if (typeof $ !== 'undefined') {
          /* Language dropdown //
          $('.language-dropdown .dropdown-toggle').off('click.lang').on('click.lang', function (e: any) {
            e.preventDefault();
            e.stopPropagation();
            const $dropdown = $(this).parent('.language-dropdown');
            $('.language-dropdown').not($dropdown).removeClass('show');
            $dropdown.toggleClass('show');
          });

          /* Contact dropdowns //
          $('.contact-icon').off('click').on('click', function (e: any) {
            e.preventDefault();
            e.stopPropagation();
            const $parent = $(this).closest('.contact-dropdown');
            $('.contact-dropdown').not($parent).removeClass('open');
            $('.contact-box').not($(this).next()).hide();
            $parent.toggleClass('open');
            $(this).next('.contact-box').toggle();
          });

          /* NAVBAR TOGGLER - PURE TOGGLE //
          $('.navbar-toggler').off('click.navbar').on('click.navbar', function (e: any) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Header toggler clicked');
            const $target = $('#mainMenu');
            $target.toggleClass('show');
            console.log('Toggle result:', $target.hasClass('show'));
          });

          /* Close on link click //
          $('.navbar-nav .nav-link').off('click.close').on('click.close', function () {
            $('.navbar-collapse').removeClass('show');
          });

          /* Close dropdowns outside //
          $(document).off('click.navbarclose').on('click.navbarclose', function (e: any) {
            if (!$(e.target).closest('.navbar, .dropdown, .contact-dropdown').length) {
              $('.navbar-collapse').removeClass('show');
              $('.dropdown').removeClass('show');
              $('.contact-dropdown').removeClass('open');
              $('.contact-box').hide();
            }
          });

          /* Sticky nav //
          $(window).off('scroll.header').on('scroll.header', function() {
            const scrollTop = $(this).scrollTop() || 0;
            if (scrollTop > 40) {
              $('.main-navbar').addClass('scrolled');
              $('.logo-light').addClass('d-none');
            } else {
              $('.main-navbar').removeClass('scrolled');
              $('.logo-light').removeClass('d-none');
            }
          });

        } else {
          setTimeout(checkJQuery, 100);
        }
      };
      checkJQuery();
    }*/
  }
}

