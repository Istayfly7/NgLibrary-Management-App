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

    cancel() {
        this.router.navigate(['dashboard'])
    }
}