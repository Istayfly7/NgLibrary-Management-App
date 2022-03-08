import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .navbar-welcome {margin-left: 60%;}
        nav {width: 100%;}
    `]
})
export class NavBarComponent {
    constructor(public authService:AuthService){}
}