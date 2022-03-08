import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: 'login.component.html',
    styles: [`
        button {
            margin-top: 10px;
        }

        form {
            padding-top: 15px;
        }

        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
    `]
})
export class LoginComponent {
    username
    password
    mouseoverLogin

    constructor(private authService:AuthService, private router:Router){}

    login(formValues){
        this.authService.loginUser(formValues.username, formValues.password);

        this.router.navigate(['dashboard']);
    }

    cancel(){
        this.router.navigate(['dashboard']);
    }
}