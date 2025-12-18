import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../Entidades/Empresa';

@Component({
  selector: 'app-inicio-componente',
  imports: [],
  templateUrl: './inicio-componente.component.html',
  styleUrl: './inicio-componente.component.css'
})
export class InicioComponenteComponent implements OnInit {
  empresa!:Empresa | null;
    ngOnInit(): void {
        this.empresa = this.obtener();
    }
    obtener():Empresa | null {
        const data = localStorage.getItem('empresa');
        return data ? JSON.parse(data): null;
    }
}
