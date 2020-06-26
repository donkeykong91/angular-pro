import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl">
      </ng-container>
      <template #tmpl>
        Daryl Occ : Westminster, CA
      </template>
    </div>
  `
})
export class AppComponent {

}