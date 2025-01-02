import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = 'http://localhost:8080/api/groups'; // Replace with your API URL
  private followApiUrl = 'http://localhost:8080/api/users'; // Replace with your follow API URL

  constructor(private http: HttpClient) { }

  createGroup(group: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, group);
  }

  followUser(userId: number): Observable<any> {
    return this.http.post<any>(`${this.followApiUrl}/${userId}/follow`, {});
  }
}
