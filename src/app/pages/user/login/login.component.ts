import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  onSubmit() {
    console.log('Login submitted:', this.credentials);
    console.log('Username', this.credentials.password)
    console.log('password', this.credentials.username)
    // Goi API
  }
} 