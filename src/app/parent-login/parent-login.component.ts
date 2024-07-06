import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrls: ['./parent-login.component.css']
})
export class ParentLoginComponent {
  email: string = '';
  password: string = '';
  errors: any = {}; // Define the errors property
  private apiUrl = 'https://edumang.000webhostapp.com/api/parent/login';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errors = { message: 'Please fill in all required fields.' };
      alert(this.errors.message);
      return;
    }

    const inputData = { email: this.email, password: this.password };
    const queryString = this.toQueryString(inputData);

    this.http.get(`${this.apiUrl}?${queryString}`).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        alert("Login Successful");
        this.router.navigate(['/parent']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Login failed:', error);
        this.errors = { message: error.error.message || 'An error occurred during login.' };
        alert(this.errors.message);
        console.error('Server error:', error.error);
      }
    });
  }
    toQueryString(obj: any): string {
    const parts: string[] = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    }
    return parts.join('&');
  }
}
