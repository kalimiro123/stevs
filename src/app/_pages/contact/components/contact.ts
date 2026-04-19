import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbComponent } from '../../../_core/components/widgets/breadcrumb/breadcrumb.component';
import { FormContactComponent } from '../componentswidgets/form-contact/form-contact.component';
import { MapsComponent } from '../componentswidgets/maps/maps.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,
      BreadcrumbComponent,
      FormContactComponent,
      MapsComponent
    ],
})
export default class Contact {

   
}
