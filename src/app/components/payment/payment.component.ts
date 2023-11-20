import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/Car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  car!: Car;
  paymentHandler:any = null;

  constructor(
    private carService : CarService,
     private route: ActivatedRoute) { }

  ngOnInit() {
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
  
  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        // alert('Payment has been successfull!');
        this.router.navigate(["/book"])
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
            // alert('Payment has been successfull!');
            this.router.navigate(["/book"])
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
}
