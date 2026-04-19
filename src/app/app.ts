import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './_core/components/structure/header/header';
import { Footer } from './_core/components/structure/footer/footer';
import { HelpermainService } from './_core/helpers/helpermain/helpermain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,

    Header,
    Footer,
  ],
})
export class App {

  private readonly _helper = inject(HelpermainService);

  protected readonly title = signal('projet');

  // 🚀 Active la fonction onActivate du service helperstructure
  protected onActivate(): void {
    this._helper.onActivate('id', 'app');
  }
}
