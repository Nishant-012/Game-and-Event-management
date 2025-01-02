import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  eventId: number = 0;
  feedback: string = '';

  constructor(private feedbackService: FeedbackService) { }

  onSubmit() {
    const feedbackData = {
      eventId: this.eventId,
      feedback: this.feedback
    };
    this.feedbackService.createFeedback(feedbackData).subscribe(
      response => {
        console.log('Feedback submitted successfully:', response);
        alert('feedback created successfully');
        // Handle successful feedback submission (e.g., show a success message)
      },
      error => {
        console.error('Error submitting feedback:', error);
        alert('feedback created successfully');
        // Handle feedback submission error (e.g., show an error message)
      }
    );
  }
}

