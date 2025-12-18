import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuComponenteComponent } from "./pagina/menu-componente/menu-componente.component";
import { PiePaginaComponenteComponent } from "./pagina/pie-pagina-componente/pie-pagina-componente.component";
import { filter } from 'rxjs';
import { Empresa } from './Entidades/Empresa';
import { ServicioEmpresaService } from './servicio/servicio-empresa.service';
import { error } from 'console';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  esDashboard = false;
  empresaActual!: Empresa;
  constructor(private router: Router, private empresaSercicio:ServicioEmpresaService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.esDashboard = event.urlAfterRedirects.startsWith('/dashboard');
      });
  }
  ngOnInit(): void {
      this.cargarEmpresa(1);
  }
  cargarEmpresa(id:number){
      this.empresaSercicio.obtener(id).subscribe({
          next:(empresa) => {
            this.empresaActual=empresa;
            localStorage.setItem('empresa',JSON.stringify(empresa));
          },
          error: error => console.error(error)
      });
  }
}
