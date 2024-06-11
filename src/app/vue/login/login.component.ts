import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Implémentez la logique de connexion ici
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
  }
}
