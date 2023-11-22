import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { DatileComponent } from './components/datile/datile.component';

import { TheuserComponent } from './components/theuser/theuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import {MatSelectModule} from '@angular/material/select';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BookComponent } from './components/book/book.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent,
    NaviComponent,
    DatileComponent,
    TheuserComponent,
    PageNotFoundComponentComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    BookComponent,
    EditProfileComponent,
    ProfileComponent
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
     MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      ReactiveFormsModule,
      MatMenuModule,
      MatSelectModule,
      CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

