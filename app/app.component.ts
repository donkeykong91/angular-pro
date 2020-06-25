import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterContentInit, ComponentRef } from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button (click)="destroyComponent()">
        Destroy
      </button>
      <button (click)="moveComponent()">
        move
      </button>
      <div #entry></div>
    </div>
  `
})
export class AppComponent implements AfterContentInit{

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  component: ComponentRef<AuthFormComponent>;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create account';
    this.component.instance.submitted.subscribe(this.loginUser);
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