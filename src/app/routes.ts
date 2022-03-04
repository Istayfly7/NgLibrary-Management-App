import { LibraryDashboardComponent } from "./library/library.component"
import { LibraryCatalogComponent } from "./library/library-catalog.component"
import { LibraryAdminComponent } from "./library/library-admin.component"
import { Routes } from "@angular/router"

export const appRoutes:Routes = [
    {path: 'dashboard', component: LibraryDashboardComponent},
    {path: 'catalog', component: LibraryCatalogComponent},
    {path: 'admin', component: LibraryAdminComponent},
    {path: '', redirectTo: '/dashboard', pathMatch:'full'}
]