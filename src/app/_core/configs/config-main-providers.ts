// 📌 Angular modules interne
import { DATE_PIPE_DEFAULT_OPTIONS, IMAGE_CONFIG } from '@angular/common';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
  withXsrfConfiguration,
} from '@angular/common/http';
import {
  APP_ID,
  CSP_NONCE,
  importProvidersFrom,
  LOCALE_ID,
  Provider,
  EnvironmentProviders,
  provideAppInitializer,
  inject,
} from '@angular/core';
import {
  provideClientHydration,
  REMOVE_STYLES_ON_COMPONENT_DESTROY,
  withEventReplay,
  withHttpTransferCacheOptions,
  withI18nSupport,
  withIncrementalHydration,
} from '@angular/platform-browser';
import {
  provideRouter,
  PreloadAllModules,
  withPreloading,
  withRouterConfig,
  UrlSerializer,
  withViewTransitions,
  withComponentInputBinding,
  withNavigationErrorHandler,
  withExperimentalAutoCleanupInjectors,
} from '@angular/router';

//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// 📌 Angular modules externe
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
// 📌 ngrx - Store - effects -reducer

// 📌 Config Files
import { HelpermainService } from '../helpers/helpermain/helpermain.service';
import { environment } from '../../../environments/environment';
import { routes } from '../../app.routes';
// 📌 _interceptors
// 📌 _shared && Services

// 📌 Hydration Client
export function provideHydration(): EnvironmentProviders {
  return provideClientHydration(
    withIncrementalHydration(),
    withEventReplay(),
    withI18nSupport(),
    withHttpTransferCacheOptions({
      includeHeaders: ['ETag', 'Cache-Control'],
      includePostRequests: true,
      includeRequestsWithAuthHeaders: false,
    })
  );
}


// 📌 HTTP configuration
/*export function provideHttpLayer(): EnvironmentProviders {
  return provideHttpClient(
    withInterceptors([JwtrequestInterceptor]), // ⬅️ Intercepteurs fonctionnels SSR-safe
    //withInterceptorsFromDi(),
    withFetch(),
    withXsrfConfiguration({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    })
  );
}*/

// 📌 Routing configuration
export function provideRouting(): EnvironmentProviders {
  return provideRouter(
    routes,
    withExperimentalAutoCleanupInjectors(), // enable the experimental cleanup
    withViewTransitions({
      skipInitialTransition: true, // Évite la transition initiale
    }),
    withRouterConfig({
      canceledNavigationResolution: 'replace', // Restores state when navigation is canceled
      urlUpdateStrategy: 'deferred', // Updates the URL immediately when navigation starts (eager/deferred)
      paramsInheritanceStrategy: 'always', // Ensures child routes inherit parent parameters
      onSameUrlNavigation: 'ignore', // Active la navigation sur la même URL (reload/ignore) ignore Plus stable que 'reload'
    }),
    withPreloading(PreloadAllModules),
    withComponentInputBinding(),
    //withDebugTracing(), //Enables detailed router logs
    withNavigationErrorHandler((error: unknown) => {
      if (
        error instanceof Error &&
        (error?.name === 'AbortError' || error?.message.includes('Transition was skipped'))
      ) {
        console.warn('⚠️ Navigation transition was skipped safely');
        return; // Ne pas logger comme une erreur critique
      }
      console.error('❌ Navigation Error:', error);
    })
  );
}

// 📌 Core application configuration
export function provideCore(): Provider[] {
  return [
    { provide: APP_ID, useValue: environment.idapp },
    { provide: LOCALE_ID, useValue: environment.locale },
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { timezone: environment.timezone } },
    //{ provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: {dateFormat: 'medium'}},
    { provide: CSP_NONCE, useValue: environment.csrf },
    { provide: REMOVE_STYLES_ON_COMPONENT_DESTROY, useValue: false },
    // Disabling Image Performance Warnings
    {
      provide: IMAGE_CONFIG,
      useValue: { disableImageSizeWarning: false, disableImageLazyLoadWarning: false },
    },
  ];
}

// 📌 Initialize I18 Tranlate


// 📌 NgRx Store - effects -reducer
export function provideNgRx(): EnvironmentProviders[] {
  return [
    // 📌 NgRx Store Configuration
    provideStore(),
    // 📌 Effects Configuration
    provideEffects(),
    // 📌 DevTools Configuration Optimisée
    provideStoreDevtools({
      name: environment.name,
      maxAge: 25, // Nombre max d'actions dans l'historique
      logOnly: !environment.production, // true = production, false = development
      autoPause: true, // Pause quand le devtools n'est pas focus
      trace: true, // Stack traces pour le debugging
      traceLimit: environment.production ? 0 : 75, // Limite en dev seulement
      connectInZone: true, // IMPORTANT - Corrige les problèmes de change detection
    }),
  ];
}

