// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'localhost:8080/user/create'; // Replace with your API URL

//   constructor(private http: HttpClient) { }

//   register(username: string, email: string, password: string, roles: any[]): Observable<any> {
//     const user = { username, email, password, roles };
//     return this.http.post<any>(this.apiUrl, user);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:8080'; // Ensure the protocol is included

  constructor(private http: HttpClient) { }

  register(username: string, email: string, password: string, roles: any[]): Observable<any> {
    const user = { username, email, password, roles };
    return this.http.post(`${this.baseUrl}/user/create`, user);
  }

  private apiUrl = 'http://localhost:8080/authenticate'; // Replace with your API endpoint

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
}
}
