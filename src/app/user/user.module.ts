import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from './user.routes';
import { UserProfileComponent } from "./profile.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        UserProfileComponent,
        LoginComponent
    ],
    providers: []
})
export class UserModule {

}