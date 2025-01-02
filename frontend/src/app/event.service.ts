// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventService {
//   private apiUrl = 'localhost:8080'; // Replace with your API URL

//   constructor(private http: HttpClient) { }

//   createEvent(event: any): Observable<any> {
//     return this.http.post<any>(`${this.apiUrl}/api/events`, event);
//   }

//   getEvents(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/api/events`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost:8080'; // Ensure the protocol is included

  constructor(private http: HttpClient) { }

  createEvent(event: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/events`, event);
  }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/events`);
  }
}

