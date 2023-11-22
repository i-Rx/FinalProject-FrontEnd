import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  users: User[] = []
  id: number = 0
  constructor(private userApi: UserService, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    const currentUser = JSON.parse(localStorage.getItem('currentUser') ?? '{}');
    const userId = currentUser?.id;
    this.getUserById(userId)
  }
  getUserById(id: number){
    return this.userApi.getUsersById(id).subscribe({
      next: (user) =>
      {this.users = [user],
        console.log(user)
      }
    })  
  }
}
