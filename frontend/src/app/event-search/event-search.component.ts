// import { Component } from '@angular/core';
// import { EventSearchService } from '../event-search.service';

// @Component({
//   selector: 'app-event-search',
//   templateUrl: './event-search.component.html',
//   styleUrls: ['./event-search.component.css']
// })
// export class EventSearchComponent {
//   keyword: string = '';
//   startDate: string = '';
//   endDate: string = '';
//   events: any[] = [];

//   constructor(private eventSearchService: EventSearchService) { }

//   onSearch() {
//     this.eventSearchService.searchEvents(this.keyword).subscribe(
//       (      response: any[]) => {
//         this.events = response;
//         console.log('Events fetched successfully:', this.events);
//       },
//       (      error: any) => {
//         console.error('Error fetching events:', error);
//       }
//     );
//   }

//   onFilter() {
//     this.eventSearchService.filterEvents(this.startDate, this.endDate).subscribe(
//       (      response: any[]) => {
//         this.events = response;
//         console.log('Events filtered successfully:', this.events);
//       },
//       (      error: any) => {
//         console.error('Error filtering events:', error);
//       }
//     );
//   }
// }


import { Component } from '@angular/core';
import { EventSearchService } from '../event-search.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css'],
  providers: [DatePipe]
})
export class EventSearchComponent {
  keyword: string = '';
  startDate: string = '';
  endDate: string = '';
  events: any[] = [];

  constructor(private eventSearchService: EventSearchService, private datePipe: DatePipe) { }

  onSearch() {
    this.eventSearchService.searchEvents(this.keyword).subscribe(
      (response: any[]) => {
        this.events = response;
        console.log('Events fetched successfully:', this.events);
      },
      (error: any) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  onFilter() {
    const formattedStartDate = this.datePipe.transform(this.startDate, 'yyyy-MM-ddTHH:mm:ss') || '';
    const formattedEndDate = this.datePipe.transform(this.endDate, 'yyyy-MM-ddTHH:mm:ss') || '';
    this.eventSearchService.filterEvents(formattedStartDate, formattedEndDate).subscribe(
      (response: any[]) => {
        this.events = response;
        console.log('Events filtered successfully:', this.events);
      },
      (error: any) => {
        console.error('Error filtering events:', error);
      }
    );
  }
}


