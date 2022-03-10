import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LibraryAppComponent } from './library-app.component';
import { LibraryAdminComponent } from './library/library-admin.component';
import { LibraryCatalogComponent } from './library/library-catalog.component';
import { CatalogTableComponent } from './library/library-catalog/catalog-table.component';
import { LibraryCardComponent } from './library/library-dashboard/library-card/library-card.component';
import { LibraryCarouselComponent } from './library/library-dashboard/library-carousel/library-carousel.component';
import { LibraryDashboardComponent } from './library/library.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './user/helpers/auth.interceptor';
import { AuthService } from './user/services/auth.service';
import { TokenStorageService } from './user/services/token-storage.service';

@NgModule({
  declarations: [
    LibraryAppComponent,
    NavBarComponent,
    LibraryDashboardComponent,
    LibraryCarouselComponent,
    LibraryCardComponent,
    LibraryCatalogComponent,
    LibraryAdminComponent,
    CatalogTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthInterceptor,
    AuthService,
    TokenStorageService
  ],
  bootstrap: [LibraryAppComponent]
})
export class AppModule { }
