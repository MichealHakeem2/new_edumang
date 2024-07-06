import { Component } from '@angular/core';
import { PaymentParentService } from 'src/app/Services/payment-parent.service';

@Component({
  selector: 'app-parent-payment',
  templateUrl: './parent-payment.component.html',
  styleUrls: ['./parent-payment.component.css']
})
export class ParentPaymentComponent {
  creditCardNumber: string = '';
  amount: number = 0;
  paymentSuccess: boolean = false;
paymentError: any;

  constructor(private PaymentParentService: PaymentParentService) {}

  processPayment(): void {
    this.PaymentParentService.processPayment(this.creditCardNumber, this.amount)
      .then(success => {
        this.paymentSuccess = success;
      })
      .catch(error => {
        console.error('Payment failed:', error);
        // Handle payment failure
      });
  }
  
}
