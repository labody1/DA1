import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  credentials = {
    username: '',
    password: '',
    email: '',
    sdt:'',
  };

  onSubmit() {
    console.log('Login submitted:', this.credentials);
    console.log('Username', this.credentials.username)
    console.log('password', this.credentials.password)
    console.log('email', this.credentials.email)
    console.log('sdt', this.credentials.sdt)
    // Goi API
  }
}
