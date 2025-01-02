import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:8080/api/teams/countByUserId'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAttendance(userId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${userId}`);
  }
}
