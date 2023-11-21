import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usernameInput: FormControl
  passwordInput: FormControl
  loginForm: FormGroup
  errorMsg: string

  constructor(private loginApi: AuthService, private router: Router){
    this.usernameInput = new FormControl("",  [Validators.required, Validators.minLength(5)])
    this.passwordInput = new FormControl("",[Validators.required, Validators.minLength(7)])
    this.loginForm = new FormGroup({
       username: this.usernameInput,
       password: this.passwordInput,
    })
    this.errorMsg = ""

  }
  login(){
    console.log(this.loginForm.value.username, this.loginForm.value.password)
    this.loginApi.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (response) => {
        console.log("Login successfuly")
        localStorage.removeItem("Token")
        localStorage.setItem("Token", response.token)
      

        this.loginApi.authenticate().subscribe({
          next: (userData: User) =>{
            localStorage.setItem("currentUser", JSON.stringify(userData))
            Swal.fire('Success!', 'Login successfuly', 'success')
            this.router.navigate(["/home"])
          }
        })
       },
    
      error:(err) =>{
        console.log(err, err.status)
        if(err.status === 403){
          this.errorMsg = "Wrong username/password"
        }
      }
    })}
  
  }

