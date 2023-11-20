import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {

  constructor(private authApi:  AuthService, private router: Router){}
  logout(){
    this.authApi.logout()
    this.router.navigate(["/login"])
  }
  
}
