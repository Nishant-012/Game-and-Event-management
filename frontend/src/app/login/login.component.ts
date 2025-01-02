import { Component } from '@angular/core';
 // Adjust the path as necessary
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // Assuming the response contains the JWT token
        localStorage.setItem('token', response.token);
        console.log('User logged in:', this.username);
        // Redirect to another page if needed
        this.router.navigate(['/event']);
      },
      error => {
        console.error('Login failed', error);
        alert('Credentials are not correct. Please try again.');
      }
    );
  }
}
