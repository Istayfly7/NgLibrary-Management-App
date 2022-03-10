import { Component , OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenStorageService } from "./services/token-storage.service";
import { IUser } from "./user.model";

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
    currentUser:IUser

    constructor(private token: TokenStorageService, private router: Router){}

    ngOnInit(): void {
        this.setCurrentUser(this.token.getUser)

        let username = new FormControl(this.currentUser.username, Validators.required)
        let password = new FormControl(this.currentUser.password, Validators.required)
        this.profileForm = new FormGroup({
            username: username,
            password: password
        })
    }

    saveProfile(formValues){
        if(this.profileForm.valid){
            //*****NOT FINISHED */
            //this.authService.updateCurrentUser(formValues.firstname, formValues.lastname)
            this.router.navigate(['dashboard'])
        }
    }

    setCurrentUser(user): void{
        this.currentUser={
            username: user.username,
            password: user.password
        }
    }

    validateUserName(){
        return this.profileForm.controls.username.valid || this.profileForm.controls.username.untouched
    }

    validatePassword(){
        return this.profileForm.controls.password.valid || this.profileForm.controls.password.untouched
    }

    cancel() {
        this.router.navigate(['dashboard'])
    }
}