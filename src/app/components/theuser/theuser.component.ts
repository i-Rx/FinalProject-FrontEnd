import { Component } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-theuser',
  templateUrl: './theuser.component.html',
  styleUrls: ['./theuser.component.css']
})
export class TheuserComponent {

  users : User[]= [];

  constructor(private userService : UserService) {}


   ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });

}
}

