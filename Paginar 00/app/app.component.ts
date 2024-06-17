import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginarComponent } from './componentes/paginar/paginar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Paginación en Angular';
}
