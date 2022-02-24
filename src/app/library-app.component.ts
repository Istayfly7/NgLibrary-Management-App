import { Component } from '@angular/core';

@Component({
  selector: 'library-app',
  template: `
      <nav-bar></nav-bar>
      <library-dashboard></library-dashboard>
  `
})
export class LibraryAppComponent {
  title = 'ng-LibraryManagementApp';
}
