import { Routes } from '@angular/router';
import { InicioComponenteComponent } from './pagina/inicio-componente/inicio-componente.component';
import { NoticiaComponenteComponent } from './Dashboard/noticia-componente/noticia-componente.component';
import { LoginComponenteComponent } from './pagina/login-componente/login-componente.component';
import { DashboardComponenteComponent } from './Dashboard/dashboard-componente/dashboard-componente.component';
import { AuthGuard } from './auth.guard';
import { EmpresaComponenteComponent } from './Dashboard/empresa-componente/empresa-componente.component';
import { PiePaginaComponenteComponent } from './Dashboard/pie-pagina-componente/pie-pagina-componente.component';
import { PaginaPrincipalComponenteComponent } from './pagina/pagina-principal-componente/pagina-principal-componente.component';
export const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponenteComponent,
    children: [
      { path: 'inicio', component: InicioComponenteComponent },
      { path: 'noticias', component: NoticiaComponenteComponent },
      { path: 'login', component: LoginComponenteComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  
  {
    path: 'dashboard',
    component: DashboardComponenteComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: EmpresaComponenteComponent },
        { path: 'empresa', component: NoticiaComponenteComponent },
        { path: 'usuarios', component: PiePaginaComponenteComponent }
    ]
  },
  { path: '**', redirectTo: 'inicio' }
];

