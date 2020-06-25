import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterContentInit, ComponentRef, TemplateRef } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
      <template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </template>
    </div>
  `
})
export class AppComponent implements AfterContentInit{

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  component: ComponentRef<AuthFormComponent>;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmpl, {
      $implicit: 'Kevin Occ'
      location: 'Westminster, CA'
    });
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  destroyComponent () {
    this.component.destroy();
  }
}