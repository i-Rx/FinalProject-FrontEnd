import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  usernameInput: FormControl
  passwordInput: FormControl
  emailInput: FormControl
  signUpForm: FormGroup

  constructor(private signUpApi: AuthService, private router: Router){
    this.usernameInput = new FormControl("",  [Validators.required, Validators.minLength(3)])
    this.passwordInput = new FormControl("",[Validators.required, Validators.minLength(7)])
    this.emailInput = new FormControl("", [Validators.required, Validators.email])
    this.signUpForm = new FormGroup({
      username: this.usernameInput,
      password: this.passwordInput,
      email: this.emailInput,
    })
  }

  
    saveUser(){
      const user: User = new User(
        this.signUpForm.value.username,
        this.signUpForm.value.password,
        this.signUpForm.value.email,)

        console.log(user);

      this.signUpApi.signUp(user).subscribe({

        next: (users: User)=>{
        console.log("created", [users])
        
        
      },
        error: (err) => console.log(err)
      })
     
      this.router.navigate(["/"])
    }

}
