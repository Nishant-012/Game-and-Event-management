import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
  paymentMode: string = 'pay-online';
  paymentMethod: string = 'card';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  upiId: string = '';

  confirmPayment() {
    // Add your payment confirmation logic here
    console.log('Payment confirmed');
    alert("booking confirm");
    if (this.paymentMethod === 'card') {
      console.log(`Card Number: ${this.cardNumber}, Expiry Date: ${this.expiryDate}, CVV: ${this.cvv}`);
    } else if (this.paymentMethod === 'upi') {
      console.log(`UPI ID: ${this.upiId}`);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
  
}