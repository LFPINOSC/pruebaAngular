import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Empresa } from '../../Entidades/Empresa';

@Component({
  selector: 'app-menu-componente',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './menu-componente.component.html',
  styleUrl: './menu-componente.component.css'
})
export class MenuComponenteComponent implements OnInit{
  empresa!:Empresa | null;
  ngOnInit(): void {
      this.empresa = this.obtener();
  }
  obtener():Empresa | null {
      const data = localStorage.getItem('empresa');
      return data ? JSON.parse(data): null;
  }
}
