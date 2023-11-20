import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  
  constructor(private authApi: AuthService, public router: Router) {}
  canActivate(): boolean{
    if(!this.authApi.isAuthenticatied()){
      this.router.navigate(["login"])
      return false
    }
    return true
  }
}
