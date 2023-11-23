import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  constructor(private authApi:  AuthService, private router: Router){}
  logout(){
    this.authApi.logout()
        // localStorage.setItem("isLoggedIn", "true")
      localStorage.removeItem("isLoggedIn")
    this.router.navigate(["/login"])
  }
}
