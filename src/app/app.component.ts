import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponenteComponent } from "./pagina/menu-componente/menu-componente.component";
import { PiePaginaComponenteComponent } from "./pagina/pie-pagina-componente/pie-pagina-componente.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponenteComponent, PiePaginaComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
}
