import { DestroyRef, inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  Params,
  UrlTree,
  ActivationStart,
  NavigationExtras,
} from '@angular/router';
import { DOCUMENT, isPlatformBrowser, Location } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { delay, distinctUntilChanged, filter } from 'rxjs/operators';
import { ClassOrIdType } from '../../features/general';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  /*****************************************************************************
   ******** 📌💉 Inejection des dépendances
   **************************************************************************************/

  // Injection de ActivatedRoute pour accéder aux informations de la route active
  private readonly _activeroute = inject(ActivatedRoute);

  // Injection de Location pour gérer l'historique de navigation
  private readonly _location = inject(Location);

  // Injection de Router pour gérer la navigation
  private readonly _router = inject(Router);

  // Injection de DestroyRef pour gérer le cycle de vie des abonnements
  private readonly _destroyRef = inject(DestroyRef);

  private readonly _document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  /*****************************************************************************
   ******** 📌💾 Variables
   **************************************************************************************/

  // Signal pour l'URL actuelle
  public currentUrl$: WritableSignal<string> = signal<string>(this._router.url);

  // Signal pour ancien URL
  public previousUrl$: WritableSignal<string> = signal<string>('');

  private isBrowser: boolean;

  /*****************************************************************************
   ******** 📌 Constructor
   **************************************************************************************/

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.setupNavigation(); // Surveiller les événements de NavigationEnd
  }

  /*****************************************************************************************
   ** 📌 Log
   **************************************************************************************************/

  private isSkippableNavigationError(error: unknown): boolean {
    if (!(error instanceof Error)) {
      return false;
    }

    const message = error.message?.toLowerCase() ?? '';
    return (
      error.name === 'AbortError' ||
      message.includes('transition was skipped') ||
      message.includes('navigationcancel') ||
      message.includes('navigation skipped')
    );
  }

  /*****************************************************************************
   ******** 📌 Functions
   **************************************************************************************/
  // Surveiller les événements de navigation
  private setupNavigation(): void {
    this._router.events
      .pipe(
        filter(
          (e): e is NavigationEnd | ActivationStart =>
            e instanceof NavigationEnd || e instanceof ActivationStart
        ),
        distinctUntilChanged((prev, curr) => {
          if (prev instanceof NavigationEnd && curr instanceof NavigationEnd) {
            return prev.url === curr.url && prev.urlAfterRedirects === curr.urlAfterRedirects;
          }
          return false;
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe({
        next: event => {
          if (event instanceof NavigationEnd) {
            // Mise à jour atomique des URLs
            this._updateUrls(event.url, event.urlAfterRedirects);
          }
          // ActivationStart sera traité ici si nécessaire
        },
        error: err => console.error('Navigation error : ' , err),
      });
  }

  /**
   * Met à jour les URLs de manière atomique et déclenche la détection des paramètres
   */
  private _updateUrls(currentUrl: string, urlAfterRedirects?: string): void {
    // Mise à jour groupée pour éviter les multiples déclenchements
    this.previousUrl$.set(this.currentUrl$());
    this.currentUrl$.set(urlAfterRedirects || currentUrl);
  }

  public gotoLinkWithParams(
    link: string | UrlTree,
    reload: boolean = false,
    replaceUrl: boolean = false
  ): void {
    void this._router.navigateByUrl(link, { replaceUrl }).then(() => {
      if (reload) {
        this.reloadPage();
      }
    });
  }

  public routerNavigate(
    path: string | UrlTree,
    reload = false,
    preserveQueryParams = false,
    queryParams?: { [key: string]: string | number | boolean }
  ): void {
    const navigationExtras: NavigationExtras = {};

    // Gestion des paramètres de requête
    if (queryParams && Object.keys(queryParams).length > 0) {
      navigationExtras.queryParams = queryParams;
      // Si on veut préserver les paramètres existants
      if (preserveQueryParams) {
        navigationExtras.queryParamsHandling = 'merge';
      }
    } else if (preserveQueryParams) {
      // Si on veut juste préserver les paramètres existants sans en ajouter
      navigationExtras.queryParamsHandling = 'preserve';
    }
    this._router
      .navigate([path], navigationExtras)
      .then((success: boolean) => {
        if (success && reload) {
          this.reloadedPage();
        }
      })
      .catch((error: unknown) => {
        if (this.isSkippableNavigationError(error)) {
          console.warn('Navigation skipped safely', 'warn', error);
          return;
        }
        console.warn('Navigation error', 'error', error);
      });

    /*if (reload) {
      navigationExtras = {};
    } else if (preserveQueryParams && queryParams && Object.keys(queryParams).length) {
      navigationExtras = { queryParams: queryParams };
    }
    this._router.navigate([path], navigationExtras).then(() => {
      if (reload) {
        this.reloadPage();
      }
    });*/
  }
  private reloadedPage(): void {
    const currentUrl = this._router.url;
    void this._router.navigateByUrl('/b2b/dashbord/home', { skipLocationChange: true }).then(() => {
      void this._router.navigate([currentUrl]);
    });
  }

  /**
   * Navigates to a route after a specified delay with automatic cleanup
   * @param link The route path to navigate to
   * @param delayMs Delay duration in milliseconds
   * @param replaceUrl Whether to replace current browser history entry
   * @returns void
   */
  public gotoPageWR(link: string | UrlTree, delayMs: number, replaceUrl: boolean = false): void {
    of(null)
      .pipe(delay(delayMs), takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: () => this.gotoLinkWithParams(link, false, replaceUrl),
        error: err => console.error('Navigation error :', err),
      });
  }

  //Get current param for URL
  public getQueryParamUrl(): Observable<Params> {
    return this._activeroute.queryParams;
  }

  // 🚀 Reload the current page
  public reloadPage(): void {
    window.location.reload();
  }

  // 🚀 Navigate back in history
  public gotoBack(): void {
    this._location.back();
  }

  // 🚀 Get the current URL path
  public activeUrl(): string {
    return this._location.path();
  }

  // 🚀 Redirect using native JS /*| routerEnumType*/
  public redirectJS(url: string): void {
    window.location.href = url;
  }

  // 🚀 Retrieve the previous URL (assuming previousUrl$ is a signal or observable)
  public getPreviousUrl(): string {
    return this.previousUrl$(); // Ensure previousUrl$ is properly managed
  }

  // ⏩ Move forward in browser history
  public getwindowForward(): void {
    window.history.forward();
  }

  // ⏪ Move backward in browser history
  public getwindowBack(): void {
    window.history.back();
  }

  // 🚀 Get the current browser history state
  public getwindowState(): unknown {
    return window.history.state;
  }

  // 🌐 Open a new window with a given URL and target
  public openWindow(url: string, target: string = '_blank'): void {
    window.open(url, target);
  }

  // 🚀 Scroll to a specific position
  public scrollTop(position: number = 0): void {
    window.scrollTo({ top: position, behavior: 'smooth' }); // Smooth scrolling for better UX
  }

  // 🚀 Scroll to a specific element by ID or class name
  public scrollToView(attr: ClassOrIdType, identifier: string): void {
    if (!this.isBrowser) return;
    let el: Element | null = null;
    switch (attr) {
      case 'id':
        el = this._document.getElementById(identifier);
        break;
      case 'class':
        el = this._document.getElementsByClassName(identifier)[0]; // Get the first matching element
        break;
      default:
        break;
    }
    this.scrollIntoView(el);
  }

  // 🚀 Scroll an element into view smoothly
  private scrollIntoView(el: Element | null): void {
    el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
