import { Routes } from '@angular/router';
import { InicioComponenteComponent } from './pagina/inicio-componente/inicio-componente.component';
import { NoticiaComponenteComponent } from './pagina/noticia-componente/noticia-componente.component';

export const routes: Routes = [
    {path:'inicio',component:InicioComponenteComponent},
    {path:'noticias',component:NoticiaComponenteComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
