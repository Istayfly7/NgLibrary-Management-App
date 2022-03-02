import { LibraryDashboardComponent } from "./library/library.component"
import { Routes } from "@angular/router"

export const appRoutes:Routes = [
    {path: 'dashboard', component: LibraryDashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch:'full'}
]