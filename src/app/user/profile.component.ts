import { Component , OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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

        em {
            floaat: right;
            color: #E05C65;
            padding-left: 50px;
        }

        .error input {
            background-color: #E3C3C5;
        }

        .error ::-web-kit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :-ms-input-placeholder {color: #999;}
    `]
})
export class UserProfileComponent implements OnInit{
    profileForm: FormGroup

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(): void {
        let firstname = new FormControl(this.authService.currentUser.firstname, Validators.required)
        let lastname = new FormControl(this.authService.currentUser.lastname, Validators.required)
        this.profileForm = new FormGroup({
            firstname: firstname,
            lastname: lastname
        })
    }

    saveProfile(formValues){
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.firstname, formValues.lastname)
            this.router.navigate(['dashboard'])
        }
    }

    validateFirstName(){
        return this.profileForm.controls.firstname.valid || this.profileForm.controls.firstname.untouched
    }

    validateLastName(){
        return this.profileForm.controls.lastname.valid || this.profileForm.controls.lastname.untouched
    }

    cancel() {
        this.router.navigate(['dashboard'])
    }
}