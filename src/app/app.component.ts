import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponenteComponent } from "./pagina/menu-componente/menu-componente.component";
import { PiePaginaComponenteComponent } from "./pagina/pie-pagina-componente/pie-pagina-componente.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  esDashboard = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.esDashboard = event.urlAfterRedirects.startsWith('/dashboard');
      });
  }
}
