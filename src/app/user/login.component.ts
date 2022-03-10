import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { TokenStorageService } from "./services/token-storage.service";

@Component({
    templateUrl: 'login.component.html',
    styles: [`
        button {
            margin-top: 10px;
        }

        form {
            padding-top: 5px;
        }

        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
    `]
})
export class LoginComponent implements OnInit{
    username
    password
    mouseoverLogin: boolean
    
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService:AuthService, private router:Router, private token:TokenStorageService){}
    
    ngOnInit(): void {
        if (this.token.getToken()) {
          this.isLoggedIn = true;
          this.roles = this.token.getUser().roles;
        }
    }

    login(formValues){
        this.authService.loginUser(formValues.username, formValues.password).subscribe(
            data => {
              this.token.saveToken(data.accessToken);
              this.token.saveUser(data);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.token.getUser().roles;
            
              window.location.replace("dashboard");
            },
            err => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
            }
          );
    }

    cancel(){
        this.router.navigate(['dashboard']);
    }
}