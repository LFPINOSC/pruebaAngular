import { Component } from '@angular/core';
import { PiePaginaComponenteComponent } from "../pie-pagina-componente/pie-pagina-componente.component";
import { MenuComponenteComponent } from "../menu-componente/menu-componente.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-principal-componente',
  imports: [RouterOutlet, PiePaginaComponenteComponent, MenuComponenteComponent],
  templateUrl: './pagina-principal-componente.component.html',
  styleUrl: './pagina-principal-componente.component.css'
})
export class PaginaPrincipalComponenteComponent {

}
