import { LibraryDashboardComponent } from "./library/library.component"
import { LibraryCatalogComponent } from "./library/library-catalog.component"
import { LibraryAdminComponent } from "./library/library-admin.component"
import { UserProfileComponent } from "./user/profile.component"
import { Routes } from "@angular/router"

export const appRoutes:Routes = [
    {path: 'dashboard', component: LibraryDashboardComponent},
    {path: 'catalog', component: LibraryCatalogComponent},
    {path: 'admin', component: LibraryAdminComponent},
    {
        path: 'user',
        loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule)
    },
    {path: '', redirectTo: '/dashboard', pathMatch:'full'}
]