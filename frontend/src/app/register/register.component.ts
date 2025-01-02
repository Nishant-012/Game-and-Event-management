import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  roleId: number = 1; // Default role ID
  roleName: string = 'USER'; // Default role name

  constructor(private authService: AuthService, private http: HttpClient) { }

  

  onRegister() {
    const roles = [{ id: this.roleId, name: this.roleName }];
    this.authService.register(this.username, this.email, this.password, roles).subscribe(
      response => {
        console.log('User registered successfully:', response);
        // Handle successful registration (e.g., navigate to login page or show a success message)
      },
      error => {
        console.error('Error registering user:', error);
        // Handle registration error (e.g., show an error message)
      }
    );
  }
}
