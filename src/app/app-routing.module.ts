import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { DatileComponent } from './components/datile/datile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LogoutComponent } from './components/logout/logout.component';



const routes: Routes = [
  { path: '', 
  // canActivate: [AuthGuardService],
  component: LoginComponent },

  { path: 'home', 
  // canActivate: [AuthGuardService],
  component: HomeComponent },
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  
  
  { path: 'logout',
  // canActivate: [AuthGuardService],
  component: LogoutComponent },

  { path: 'cars',
  // canActivate: [AuthGuardService],
  component: CarComponent },
  { path: 'datiles/:id',
    // canActivate: [AuthGuardService],
    component: DatileComponent },
  { path: 'payments',
    // canActivate: [AuthGuardService],
    component: PaymentComponent },
   
    
  {
    path: "**", // 404 Page
    component: PageNotFoundComponentComponent,
  },
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
