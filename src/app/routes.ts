import { LibraryAppComponent } from "./library-app.component"
import { Routes } from "@angular/router"

export const appRoutes:Routes = [
    {path: 'dashboard', component: LibraryAppComponent},
    {path: '', redirectTo: '/dashboard', pathMatch:'full'}
]