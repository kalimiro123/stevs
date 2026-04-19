import { inject, Injectable } from '@angular/core';
import { NavigateService } from '../../services/navigate/navigate.service';
import { ClassOrIdType } from '../../features/general';

@Injectable({
  providedIn: 'root',
})
export class HelpermainService {

  private readonly _provideNav = inject(NavigateService);

  // 🚀 Scroll to view element by id or class
  public onActivate(attr: ClassOrIdType, id: string): void {
    this._provideNav.scrollToView(attr, id);
  }
  
}
