import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../Entidades/Empresa';

@Component({
  selector: 'app-pie-pagina-componente',
  imports: [],
  templateUrl: './pie-pagina-componente.component.html',
  styleUrl: './pie-pagina-componente.component.css'
})
export class PiePaginaComponenteComponent implements OnInit {
  empresa!:Empresa | null;
    ngOnInit(): void {
        this.empresa = this.obtener();
    }
    obtener():Empresa | null {
        const data = localStorage.getItem('empresa');
        return data ? JSON.parse(data): null;
    }
}
