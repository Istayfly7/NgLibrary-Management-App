import { UserProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";

export const userRoutes = [
    {path: 'profile', component: UserProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: RegisterComponent}
]