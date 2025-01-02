// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class EventSearchService {

//   private apiUrl = 'http://localhost:8080/api/events'; // Replace with your API URL

//   constructor(private http: HttpClient) { }

//   searchEvents(keyword: string): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/search?keyword=${keyword}`);
//   }

//   filterEvents(startDate: string, endDate: string): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/filter?startDate=${startDate}&endDate=${endDate}`);
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventSearchService {

  private apiUrl = 'http://localhost:8080/api/events'; // Replace with your API URL

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  searchEvents(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?keyword=${keyword}`);
  }

  filterEvents(startDate: string, endDate: string): Observable<any[]> {
    const formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-ddTHH:mm:ss');
    const formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-ddTHH:mm:ss');
    return this.http.get<any[]>(`${this.apiUrl}/filter?startDate=${formattedStartDate}&endDate=${formattedEndDate}`);
  }
}

