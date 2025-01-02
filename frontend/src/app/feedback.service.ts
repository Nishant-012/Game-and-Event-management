import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8080/api/feedback'; // Ensure the protocol is included

  constructor(private http: HttpClient) { }

  createFeedback(feedback: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, feedback);
  }
}
