import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  id: number = 0
  usernameInput: FormControl
  passwordInput: FormControl
  emailInput: FormControl
  updateForm: FormGroup
  user: any
  constructor(private userApi: UserService, private route: ActivatedRoute){
    this.usernameInput = new FormControl("",  Validators.minLength(5))
    this.passwordInput = new FormControl("", Validators.minLength(7))
    this.emailInput = new FormControl("", Validators.email)
    this.updateForm = new FormGroup({
      username: this.usernameInput,
      password: this.passwordInput,
      email: this.emailInput,
    })
  }
  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    const userId = currentUser?.id;
    this.id = userId
    this.userApi.getUsersById(userId).subscribe((user: User) => {
      this.user = user;
      this.updateForm.patchValue({
        username: user.username,
        password: user.password,
        email: user.email,
      })
    })
  }
  updateUserById(){
    this.user = this.updateForm.value
    this.userApi.updateUserById(this.id, this.user).subscribe({
      next:(updateusers)=>
      console.log("updated", updateusers,
      ),
      error: (err) => console.log(err)
    }
    )
    Swal.fire('Success!', 'Your profile has been updated.', 'success')
  }

}
