import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PiePaginaComponenteComponent } from "../pie-pagina-componente/pie-pagina-componente.component";
import { ServicioLoginService } from '../../servicio/servicio-login.service';

@Component({
  selector: 'app-dashboard-componente',
   standalone: true,
  imports: [
    RouterOutlet,
    PiePaginaComponenteComponent
],
  templateUrl: './dashboard-componente.component.html',
  styleUrl: './dashboard-componente.component.css'
})
export class DashboardComponenteComponent {
  constructor(
    private authService: ServicioLoginService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
