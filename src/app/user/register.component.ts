import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  templateUrl: './register.component.html'/*,
  styleUrls: ['./register.component.css']*/
})
export class RegisterComponent {
  registerForm: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  
  onSubmit(): void {
    this.authService.registerUser(this.registerForm).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}