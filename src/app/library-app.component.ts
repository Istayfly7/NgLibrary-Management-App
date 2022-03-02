import { Component } from '@angular/core';

@Component({
  selector: 'library-app',
  template: `
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
  `
})
export class LibraryAppComponent {
  title = 'ng-LibraryManagementApp';
}
