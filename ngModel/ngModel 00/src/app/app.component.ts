import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "";
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
  };

  // variables de control de errores
  nombreError = false;
  apellidoError = false;
  emailError = false;

  enviarDatos() {
    this.nombreError = !this.usuario.nombre || this.usuario.nombre.length < 3;
    this.apellidoError = !this.usuario.apellido;
    this.emailError = !this.isValidEmail(this.usuario.email);

    if (!this.nombreError && !this.apellidoError && !this.emailError) {
      // Mostramos por consola el usuario registrado
      console.log('Usuario registrado:', this.usuario);
    }
  }

  isValidEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]+))$/;
    return re.test(email);
  }
}
