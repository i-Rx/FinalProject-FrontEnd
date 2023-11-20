import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Car Rental ';

  constructor(private authApi:  AuthService, private router: Router){}
  logout(){
    this.authApi.logout()
    this.router.navigate(["/login"])
  }
}
