import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibraryAppComponent } from './library-app.component';
import { LibraryDashboardComponent } from './library/library.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    LibraryAppComponent,
    NavBarComponent,
    LibraryDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LibraryAppComponent]
})
export class AppModule { }
