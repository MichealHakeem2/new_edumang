import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
export interface StudentResponse{
  id: Number,
  first_name: string
  middle_name: string
  last_name: string
  birth_date: Date
  gender: string
  address: string
  department_id: Number
  email: string
  updated_at: string
  created_at: string
}
@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  step: number = 1;
  registerForm: FormGroup;
  errors: any = {}; // Define the errors property
  private apiUrl = 'https://edumang.000webhostapp.com/api/student/register';
  private apiUrlShow = 'https://edumang.000webhostapp.com/api/student/show/';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {
    this.registerForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.hasSpecialCharacters]]
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
  student!: StudentResponse;
  getStudents(){
  return this.http.get(this.apiUrlShow+this.student.id);
  }


  saveStudent() {
    if (this.registerForm.invalid) {
      this.errors = { message: 'Please fill in all required fields.' };
      alert(this.errors.message);
      return;
    }

    const inputData = this.registerForm.value;
    const queryString = this.toQueryString(inputData);

    this.http.get(`${this.apiUrl}?${queryString}`).subscribe({
      next: (response: any) => {
        console.log('Registration successful:', response);
        alert("Registration Successful");
        this.router.navigate(['/login']);
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
