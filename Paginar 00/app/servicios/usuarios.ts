
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public arr_usuarios: any[] = [
        { id: 1, nombre: 'Juan', apellidos: 'Pérez' },
        { id: 2, nombre: 'María', apellidos: 'Gómez' },
        { id: 3, nombre: 'Carlos', apellidos: 'Martínez' },
        { id: 4, nombre: 'Ana', apellidos: 'López' },
        { id: 5, nombre: 'Luis', apellidos: 'Hernández' },
        { id: 6, nombre: 'Sofía', apellidos: 'Ramírez' },
        { id: 7, nombre: 'Miguel', apellidos: 'Sánchez' },
        { id: 8, nombre: 'Lucía', apellidos: 'Torres' },
        { id: 9, nombre: 'Diego', apellidos: 'Flores' },
        { id: 10, nombre: 'Elena', apellidos: 'Cruz' },
        { id: 11, nombre: 'Fernando', apellidos: 'Morales' },
        { id: 12, nombre: 'Camila', apellidos: 'Vargas' },
        { id: 13, nombre: 'Alberto', apellidos: 'Castro' },
        { id: 14, nombre: 'Laura', apellidos: 'Rojas' },
        { id: 15, nombre: 'Jorge', apellidos: 'Mendoza' },
        { id: 16, nombre: 'Patricia', apellidos: 'Guerrero' },
        { id: 17, nombre: 'Antonio', apellidos: 'Ortega' },
        { id: 18, nombre: 'Valeria', apellidos: 'Silva' },
        { id: 19, nombre: 'Francisco', apellidos: 'Delgado' },
        { id: 20, nombre: 'Daniela', apellidos: 'Reyes' },
        { id: 21, nombre: 'Carlos', apellidos: 'García' },
        { id: 22, nombre: 'Ana', apellidos: 'Martínez' },
        { id: 23, nombre: 'Juan', apellidos: 'Rodríguez' },
        { id: 24, nombre: 'María', apellidos: 'Hernández' },
        { id: 25, nombre: 'Javier', apellidos: 'López' },
        { id: 26, nombre: 'Cristina', apellidos: 'González' },
        { id: 27, nombre: 'Miguel', apellidos: 'Pérez' },
        { id: 28, nombre: 'Isabel', apellidos: 'Sánchez' },
        { id: 29, nombre: 'José', apellidos: 'Ramírez' },
        { id: 30, nombre: 'Teresa', apellidos: 'Torres' },
        { id: 31, nombre: 'Francisco', apellidos: 'Dominguez' },
        { id: 32, nombre: 'Sofía', apellidos: 'Castillo' },
        { id: 33, nombre: 'Luis', apellidos: 'Ortiz' },
        { id: 34, nombre: 'Carmen', apellidos: 'Aguilar' },
        { id: 35, nombre: 'Ricardo', apellidos: 'Romero' },
        { id: 36, nombre: 'Pilar', apellidos: 'Peña' },
        { id: 37, nombre: 'Manuel', apellidos: 'Navarro' },
        { id: 38, nombre: 'Rosa', apellidos: 'Vega' },
        { id: 39, nombre: 'Sergio', apellidos: 'Cortés' },
        { id: 40, nombre: 'Lourdes', apellidos: 'Rojas' },
        { id: 41, nombre: 'Gloria', apellidos: 'Galindo' }
  ]; // Puedes definir una interfaz o tipo específico para tus usuarios

  constructor() { }

  getUsers(): any[] {
    return this.arr_usuarios;
  }

  addUser(user: any): void {
    this.arr_usuarios.push(user);
  }

  // Otros métodos para manipular el array de usuarios
}