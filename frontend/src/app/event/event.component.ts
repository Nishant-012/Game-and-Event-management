// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EventService } from '../event.service';
// import { jwtDecode } from 'jwt-decode';

// @Component({
//   selector: 'app-event',
//   templateUrl: './event.component.html',
//   styleUrls: ['./event.component.css']
// })
// export class EventComponent implements OnInit {
//   name: string = '';
//   description: string = '';
//   dateTime: string = '';
//   venueId: number = 1; // Default venue ID
//   events: any[] = []; // Array to hold the list of events

//   constructor(private eventService: EventService, private router: Router) { }

//   ngOnInit(): void {
//     this.getEvents();
//   }

//   onSubmit(): void {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken: any = jwtDecode(token);
//       const authorities = decodedToken.authorities || [];

//       if (authorities.includes('ROLE_ADMIN')) {
//         const event = {
//           name: this.name,
//           description: this.description,
//           dateTime: this.dateTime,
//           venueId: this.venueId
//         };
//         this.eventService.createEvent(event).subscribe(
//           response => {
//             console.log('Event created successfully:', response);
//             alert('Event created successfully');
//             // Handle successful event creation (e.g., navigate to another page or show a success message)
//           },
//           error => {
//             console.error('Error creating event:', error);
//             // Handle event creation error (e.g., show an error message)
//           }
//         );
//       } else {
//         alert('You have no authority to create an event.');
//       }
//     } else {
//       alert('You have no authority to create an event.');
//     }
//   }

//   getEvents(): void {
//     this.eventService.getEvents().subscribe(
//       response => {
//         this.events = response;
//         console.log('Events fetched successfully:', this.events);
//       },
//       error => {
//         console.error('Error fetching events:', error);
//         // Handle error (e.g., show an error message)
//       }
//     );
//   }

//   goToSearch(): void {
//     this.router.navigate(['/event-search']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  name: string = '';
  description: string = '';
  dateTime: string = '';
  venueId: number = 1; // Default venue ID
  events: any[] = []; // Array to hold the list of events
  minDateTime: string = ''; // Minimum date and time for the event

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.setMinDateTime();
    this.getEvents();
  }

  setMinDateTime(): void {
    const now = new Date();
    this.minDateTime = now.toISOString().slice(0, 16);
  }

  onSubmit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const authorities = decodedToken.authorities || [];

      if (authorities.includes('ROLE_ADMIN')) {
        const event = {
          name: this.name,
          description: this.description,
          dateTime: this.dateTime,
          venueId: this.venueId
        };
        this.eventService.createEvent(event).subscribe(
          response => {
            console.log('Event created successfully:', response);
            alert('Event created successfully');
            // Handle successful event creation (e.g., navigate to another page or show a success message)
          },
          error => {
            console.error('Error creating event:', error);
            // Handle event creation error (e.g., show an error message)
          }
        );
      } else {
        alert('You have no authority to create an event.');
      }
    } else {
      alert('You have no authority to create an event.');
    }
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(
      response => {
        this.events = response;
        console.log('Events fetched successfully:', this.events);
      },
      error => {
        console.error('Error fetching events:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

  goToSearch(): void {
    this.router.navigate(['/event-search']);
  }
}

