import { Component } from '@angular/core';
import { Car } from 'src/app/model/Car.model';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/app.module';

@Component({
  selector: 'app-datile',
  templateUrl: './datile.component.html',
  styleUrls: ['./datile.component.css']
})
export class DatileComponent {

  car!: Car;
  paymentHandler:any = null;
  


  registerForm: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private carService : CarService,
     private route: ActivatedRoute) {
      
      this.emailInput = new FormControl('', [Validators.required, Validators.email]);
      this.passwordInput = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[0-9]{10}')]);
    
     this.registerForm = new FormGroup({  
      email: this.emailInput,
      password: this.passwordInput
    
     }
    
    );
  }
  

  
     ngOnInit(): void {
      this.invokeStripe();
      
      this.route.params.subscribe(params => {
        const id = params['id'];
      this.getCarsid(id);
     
  
      });
    }


  getCarsid(id: string){
    return this.carService.getCarsid(id).subscribe(
      cars => {
        this.car = cars
      
      }
    )
  }
 
  getErrorMessage() {
   
    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageNum() {
   
    return this.passwordInput.hasError('password') ? 'Wrong.. Should be a numbers and 10 digit' : '';
  }

  
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Payment has been successfull!');
        
        
      }
    });
  
    paymentHandler.open({
      name: 'Car Rental',
      description: 'Buying a Waleed webTest',
      amount: amount * 100
    });
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
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
            this.router.navigate(["/payments"])
          }
        });
      }
      window.document.body.appendChild(script);
      

    }
  }
}




