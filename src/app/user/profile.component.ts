import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: 'profile.component.html',
    styles: [`
        .flex-container {
            display: flex;
        }

        h3 {
            padding-top: 10px;
            margin-left: 0px;
        }

        .mybooks {
            padding-left: 10px;
            padding-right: 5px;
        }
    `]
})
export class UserProfileComponent{
    constructor(public authService:AuthService){}
}