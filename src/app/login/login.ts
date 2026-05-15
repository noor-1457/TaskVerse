import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }

 onSubmit() {

  if (this.loginForm.valid) {

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email === 'admin@gmail.com' && password === '123456') {

      // 👉 redirect to todo page
      this.router.navigate(['/todo']);

    } else {
      // optional: invalid login message
      alert('Invalid Email or Password ❌');
    }

  } else {
    alert('Form Invalid');
  }

}
}