import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LibraryAppComponent } from './library-app.component';
import { LibraryCardComponent } from './library/library-card/library-card.component';
import { LibraryCarouselComponent } from './library/library-carousel/library-carousel.component';
import { LibraryDashboardComponent } from './library/library.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    LibraryAppComponent,
    NavBarComponent,
    LibraryDashboardComponent,
    LibraryCarouselComponent,
    LibraryCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [LibraryAppComponent]
})
export class AppModule { }
