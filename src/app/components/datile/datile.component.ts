import { Component } from '@angular/core';
import { Car } from 'src/app/model/Car.model';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/app.module';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/model/Book.model';
 
@Component({
  selector: 'app-datile',
  templateUrl: './datile.component.html',
  styleUrls: ['./datile.component.css']
})
export class DatileComponent {

  car!: Car;
  paymentHandler:any = null;
  book: Book = {
    nationalID: 0,
    startDate: '',
    endDate: '',
    location: '',
    userId: 0,
    carId: 0
  }


  registerForm: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;
  nationalId: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  location: FormControl;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
 id: any;
 token: any;

  constructor(
    private carService : CarService,
     private route: ActivatedRoute, private bookService:BookService,
     private router: Router,) {
    

      this.emailInput = new FormControl('', [Validators.required, Validators.email]);
      this.passwordInput = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[0-9]{10}')]);
      this.nationalId = new FormControl('');
      this.startDate = new FormControl('');
      this.endDate = new FormControl('');
      this.location = new FormControl('');
    
      this.book.userId = this.getUserIdFromLocalStorage();
      this.token = this.getToken();
     this.registerForm = new FormGroup({  
      email: this.emailInput,
      password: this.passwordInput,
      nationalId: this.nationalId,
      startDate: this.startDate,
      endDate: this.endDate,
      location: this.location,
     }
    
    );
  }
  


  
     ngOnInit(): void {
      
      this.route.params.subscribe(params => {
        this.id = params['id'];
      this.getCarsid(this.id);
     
  
      });
      this.invokeStripe();

    }


  getCarsid(id: string){
    return this.carService.getCarsid(id).subscribe(
      cars => {
        this.car = cars
      
      }
    )
  }
 
  addBook(book: Book){
    return this.bookService.addBook(book, this.token).subscribe(
      response => {
        console.log(response);
      
      },
      error => {
        console.log(error);
      }
    )
  }

  getErrorMessage() {
   
    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageNum() {
   
    return this.passwordInput.hasError('password') ? 'Wrong.. Should be a numbers and 10 digit' : '';
  }

  getUserIdFromLocalStorage(){
    const currentUserString = localStorage.getItem('currentUser');
    let userId = 0;
    if(currentUserString){
      const currentUser = JSON.parse(currentUserString);
      userId = currentUser.id;
    }
    return userId;
  }
  getToken(){
    const tokenStorage = localStorage.getItem('Token');
  

    return tokenStorage;
  }
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token:  (stripeToken: any) =>{
        alert('Payment has been successfull!');
        this.router.navigateByUrl("/book")
        

      }
    }

    );
 
    paymentHandler.open({
      name: 'Car Rental',
      description: 'Buying a Waleed webTest',
      amount: amount * 100
    });
    this.createBook(this.book);
    this.addBook(this.book);
  }
  
  createBook(book:Book){
    book.nationalID = this.nationalId.getRawValue();
    book.startDate = this.startDate.getRawValue();
    book.endDate = this.endDate.getRawValue();
    book.location = this.location.getRawValue();
    book.carId = this.id
    console.log(book)

  }
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
          locale: 'auto',
          token:  (stripeToken: any)=> {
            console.log(stripeToken)
            alert('Payment has been successfull!');
            this.router.navigate(["/", "book"])
          }
        });
      }
      window.document.body.appendChild(script);
      

    }
  }
}




