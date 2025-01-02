import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Decode the token and check for ROLE_ADMIN
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        this.isAdmin = decodedToken.authorities.includes('ROLE_ADMIN');
      } catch (error) {
        console.error('Error decoding token', error);
      }
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
