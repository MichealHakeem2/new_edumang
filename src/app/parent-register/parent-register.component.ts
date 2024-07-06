import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parent-register',
  templateUrl: './parent-register.component.html',
  styleUrls: ['./parent-register.component.css']
})
export class ParentRegisterComponent {
  step: number = 1;
  registerForm: FormGroup;
  errors: any = {}; // Define the errors property
  private apiUrl = 'https://edumang.000webhostapp.com/api/parent/register';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.hasSpecialCharacters]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
    });
  }

  hasSpecialCharacters(control: any) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (regex.test(control.value)) {
      return null; // valid
    } else {
      return { hasSpecialCharacters: true }; // invalid
    }
  }

  saveParent() {
    if (this.registerForm.invalid) {
      this.errors = { message: 'Please fill in all required fields.' };
      return;
    }

    const inputData = this.registerForm.value;
    const queryString = this.toQueryString(inputData);

    this.http.get(`${this.apiUrl}?${queryString}`).subscribe({
      next: (response: any) => {
        console.log('Registration successful:', response);
        alert("Registration Successful");
        this.router.navigate(['/parent/login']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Registration failed:', error);
        this.errors = { message: error.error.message || 'An error occurred during registration.' };
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

  onNext() {
    if (this.step < 3) {
      this.step++;
    }
  }

  onPrevious() {
    if (this.step > 1) {
      this.step--;
    }
  }
}
