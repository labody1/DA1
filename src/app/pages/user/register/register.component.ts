import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string='';
  password: string='';
  email: string='';

  onSubmit() {
    // Handle registration logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Email:', this.email);
  }
}
