import { Component } from "@angular/core";

@Component({
    templateUrl: 'login.component.html',
    styles: [`
        button {
            margin-top: 10px;
        }

        form {
            padding-top: 15px;
        }
    `]
})
export class LoginComponent {
    username
    password

    login(formValues){
        console.log("Username: " + formValues.username);
        console.log("Password: " + formValues.password);
    }
}