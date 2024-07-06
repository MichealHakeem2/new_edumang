import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentParentService {
    processPayment(_creditCardNumber: string, amount: number): Promise<boolean> {
      // Simulate processing payment
      return new Promise<boolean>((resolve, reject) => {
        // Replace with actual payment gateway integration
        setTimeout(() => {
          resolve(true); // Payment successful
        }, 2000); // Simulate delay
      });
    }
}
