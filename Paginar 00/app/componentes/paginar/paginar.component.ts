import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/usuarios';

@Component({
  selector: 'app-paginar',
  standalone: true,
  imports: [],
  templateUrl: './paginar.component.html',
  styleUrl: './paginar.component.css'
})

/* 
elemsPagina: Define el número de elementos por página.
paginaActual: Representa la página actual.
totalPaginas: Guarda el total de páginas.
numerosTotalPaginas: Almacena los números de página visibles.
itemsSelectOptions: Define las opciones para el selector de elementos por página. 
listadoUsuarios: Almacena la lista de usuarios.

FUNCIONES
- getTotalPaginas()
- getTotalPaginasPorUsuario()
- onChangeListarUsuarios()
- mostrarUsuariosPorPagina()
- paginaAnterior()
- paginaSiguiente()
- irAPagina()
- getNumerosPagina()
*/
export class PaginarComponent implements OnInit{
  
  public SU = this.userService;
  public listadoUsuarios = this.SU.arr_usuarios;

  public elemsPagina = 5; // numero de elementos por página
  public paginaActual = 1; // numero de página actual
  public totalPaginas = 0; // total de páginas
  public numerosTotalPaginas: any[] = []; // Almacena los números de página visibles
  public itemsSelectOptions: number[] = [5, 10, 15, 20]; // Valores posibles del selector

  constructor(
    private userService: UserService // Servicio Usuarios
  ) {}

  // calculamos la paginación:
  // Total de elementos / elementos por página
  public getTotalPaginas() {
    return Math.ceil(this.SU.arr_usuarios.length / this.elemsPagina);
  }
  public getTotalPaginasPorUsuario() {
    return Math.min(this.paginaActual * this.elemsPagina, this.SU.arr_usuarios.length)
  }

  // recogemos el nuevo valor del selector de usuarios por página
  public onChangeListarUsuarios(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement);
    this.elemsPagina = parseInt(selectedValue.value, 10);
    this.paginaActual = 1; // Resetear a la primera página
  }

  // funcion que tomará del array los elementos
  // que queden definidos entre el valor 'start' y 'end'
  public mostrarUsuariosPorPagina() {

    const start = (this.paginaActual - 1) * this.elemsPagina;
    const end = start + this.elemsPagina;

    this.totalPaginas = this.getTotalPaginas();
    this.numerosTotalPaginas = this.getNumerosPagina();

    return this.SU.arr_usuarios.slice(start, end);
  }

  // FUNCIONES PARA BOTONERA
  // ENTRE LOS BOTONES PRIMERO Y ULTIMO
  // Simula navegar a la página anterior si no es la primera
  public paginaAnterior() {
    
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }
      
  // Simula navegar a la página siguiente si no es la última
  public paginaSiguiente() {
    
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
    }
  }

  // Simula la navegación a una página específica
  public irAPagina(pagina: number): void {
    this.paginaActual = pagina;
  }
    
  // función calcula los números de página que deben mostrarse 
  // en la interfaz según la página actual y el número máximo de páginas visibles
  public getNumerosPagina(): number[] {
    const maxPaginasVisibles = 3;
    let inicio = Math.max(this.paginaActual - Math.floor(maxPaginasVisibles / 2), 1);
    let fin = inicio + maxPaginasVisibles - 1;
      
    if (fin > this.totalPaginas) {
      fin = this.totalPaginas;
      inicio = Math.max(fin - maxPaginasVisibles + 1, 1);
    }

    const paginas: number[] = [];
    for (let i = inicio; i <= fin; i++) {
      paginas.push(i);
    }

    return paginas;
  }

  // función si se quiere usar como iterador especifico en el bucle for
  trackById(index: number, user: any): number {
    return user.id;
  }

  ngOnInit(): void {
    this.mostrarUsuariosPorPagina();
  }
}
