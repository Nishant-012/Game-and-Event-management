import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      eventName: ['', Validators.required],
      venue: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(0.5)]]
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const bookingData = this.bookingForm.value;
      console.log('Booking Data:', bookingData);

      // Navigate to payment page with booking data
      this.router.navigate(['/payment'], { state: { bookingData } });
    }
  }
}
