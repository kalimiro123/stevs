// 📌 Angular modules interne
import { registerLocaleData } from '@angular/common';
import {
  ApplicationConfig,
  enableProdMode,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
// import * as animation from '@angular/platform-browser/animations';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import localeFrExtra from '@angular/common/locales/extra/fr';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeArExtra from '@angular/common/locales/extra/ar';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import localeAr from '@angular/common/locales/ar';
import { environment } from '../environments/environment';
import { provideCore, provideHydration, provideNgRx, provideRouting } from './_core/configs/config-main-providers';
import { APP_SERVICES } from './_core/configs/config-services';

// 📌 Langues
registerLocaleData(localeFr, 'fr', localeFrExtra);
registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeAr, 'ar', localeArExtra);

if (environment.production === true) {
  enableProdMode();
}

export const appConfigClient: ApplicationConfig = {
  providers: [
    // 📌 Core application configuration
    ...provideCore(),
    // 📌 Registers global error listeners for browser-level exceptions, aiding in centralized error handling
    provideBrowserGlobalErrorListeners(),
    // 📌 Routing configuration
    provideRouting(),
    // 📌 HTTP configuration
    // provideHttpLayer(),
    // 📌 Initializer Translate i18
    // provideI18nInitializer(),
    // 📌 Hydrations
    provideHydration(),
    // 📌 Pour les animations asynchrones
    // animation.provideAnimations(),
    //provideAnimationsAsync('animations'),
    // 📌 Boostrap (ngx-boostrap) && Translation (ngx-translate)
    // provideUI(),
    // 📌 Service Worker
    // providePWA(),
    // 📌 NgRx Store - effects -reducer
    ...provideNgRx(),
    // 📌 ALL Services
    ...APP_SERVICES,
  ]
};
