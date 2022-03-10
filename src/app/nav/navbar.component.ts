import { Component } from "@angular/core";
import { IUser } from "../user/user.model";
import { TokenStorageService } from "../user/services/token-storage.service";
import { Router } from "@angular/router";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .navbar-welcome {margin-left: 55%; padding-right: 10px;}
        nav {width: 100%;}
    `]
})
export class NavBarComponent {
    username: string;
    
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private token: TokenStorageService, private router:Router){}

    ngOnInit(): void {
        this.isLoggedIn = !!this.token.getToken();
        if (this.isLoggedIn) {
          const user = this.token.getUser();
          this.roles = user.roles;
          //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
          //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
          this.username = user.username;
        }
    }

    logout(): void {
        this.isLoggedIn = false;
        this.token.signOut();
        this.router.navigate(['user/login']);
    }
}