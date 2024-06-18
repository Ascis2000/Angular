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
- ngOnInit()                    // inicializa el componente
- actualizarPaginacion()
- get_totalPaginas()            // número total de páginas
- get_maxPaginasVisibles()      // rango de páginas visibles
- getTotalElemsPorPagina()
- onChangeListarUsuarios()
- mostrarUsuariosPorPagina()
- paginaAnterior()
- paginaSiguiente()
- irAPagina()
*/
export class PaginarComponent implements OnInit{

  public SU = this.userService;
  public listadoUsuarios = this.SU.arr_usuarios;

  public elemsPagina = 5; // numero de elementos por página
  public paginaActual = 1; // numero de página actual
  public totalPaginas = 0; // total de páginas
  public numerosTotalPaginas: number[] = []; // Almacena los números de página visibles
  public itemsSelectOptions: number[] = [5, 10, 15, 20, 25]; // Valores posibles del selector

  public columnaOrden = ''; // columna actual por la que se ordena
  public ordenAscendente = true; // orden actual (ascendente o descendente)

  sortedColumn: string = '';
  sortAscending: boolean = true;

  constructor(
    private userService: UserService // Servicio Usuarios
  ) {}

  ngOnInit(): void {
    this.sort('id');
    this.actualizarPaginacion();
  }

  public actualizarPaginacion(): void {
    this.totalPaginas = this.get_totalPaginas();
    this.numerosTotalPaginas = this.get_maxPaginasVisibles();
  }

  // Obtenemos el número total de páginas que tiene la paginación
  public get_totalPaginas() {
    return Math.ceil(this.SU.arr_usuarios.length / this.elemsPagina);
  }
  public getTotalElemsPorPagina() {
    return Math.min(this.paginaActual * this.elemsPagina, this.SU.arr_usuarios.length)
  }

  // recogemos el nuevo valor del selector de usuarios por página
  public onChangeListarUsuarios(event: Event): void {

    this.totalPaginas = this.get_totalPaginas();
    this.paginaActual = 1; // Resetear a la primera página

    const selectedValue = (event.target as HTMLSelectElement);
    this.elemsPagina = parseInt(selectedValue.value, 10);

  }

  // funcion que tomará del array los elementos
  // que queden definidos entre el valor 'start' y 'end'
  public mostrarUsuariosPorPagina() {

    const start = (this.paginaActual - 1) * this.elemsPagina;
    const end = start + this.elemsPagina;

    this.actualizarPaginacion();

    return this.SU.arr_usuarios.slice(start, end);
  }

  // FUNCIONES PARA BOTONERA ********** */

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

  // función que calcula el tramo de números de página que tienen que ser visibles
  public get_maxPaginasVisibles(): number[] {

    let ini; // primer número de página visible
    let fin; // último número de página visible
    let paginas: number[] = []; // array que recoge los numeros de página que van a ser visibles
    const maxPaginasVisibles = 3; // máximo de paginas visibles en la paginación

    ini = Math.max(this.paginaActual - Math.floor(maxPaginasVisibles / 2), 1);
    fin = ini + maxPaginasVisibles - 1;

    // Si 'fin' es mayor que el número total de páginas 'this.totalPaginas', 'fin' es igual al total de páginas.
    // recaculamos'ini' para asegurar que se muestren hasta maxPaginasVisibles páginas, sin ir por debajo de 1.
    if (fin > this.totalPaginas) {
      fin = this.totalPaginas;
      ini = Math.max(fin - maxPaginasVisibles + 1, 1);
    }

    // construimos un array de paginas visibles en el componente de paginación.
    // Estos números van desde 'ini' hasta 'fin'.
    for (let i = ini; i <= fin; i++) {
      paginas.push(i);
    }

    return paginas; // devolvemos el array
  }

  // FUNCIONES PARA ORDENAR COLUMNAS ********** */

  public sort(columna: string) {

    if (this.columnaOrden === columna) {
      this.ordenAscendente = !this.ordenAscendente;
    } else {
      this.columnaOrden = columna;
      this.ordenAscendente = true;
    }

    this.SU.arr_usuarios.sort((a, b) => {

      let comparacion = 0;

      if (a[columna] > b[columna]) {
        comparacion = 1;
      } else if (a[columna] < b[columna]) {
        comparacion = -1;
      }

      return this.ordenAscendente ? comparacion : -comparacion;
    });

  }










  // función si se quiere usar como iterador especifico en el bucle for
  trackById(index: number, user: any): number {
    return user.id;
  }
}
