import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../Entidades/Noticia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia-componente',
  standalone: true,          // si es standalone
  imports: [CommonModule],
  templateUrl: './noticia-componente.component.html',
  styleUrl: './noticia-componente.component.css'
})
export class NoticiasComponenteComponent implements OnInit{
  noticias: Noticia[] = [];
  paginadoNoticias: Noticia[] = [];
  paginaActual = 1;
  noticiasPorPagina = 3;
  totalPaginas = 1;

  constructor() { }

  ngOnInit(): void {
    const noticiasJSON = localStorage.getItem('noticias');
    if (noticiasJSON) {
      this.noticias = JSON.parse(noticiasJSON);
      this.totalPaginas = Math.ceil(this.noticias.length / this.noticiasPorPagina);
      this.cargarPagina(this.paginaActual);
    }
  }

  cargarPagina(pagina: number): void {
    this.paginaActual = pagina;
    const inicio = (pagina - 1) * this.noticiasPorPagina;
    const fin = inicio + this.noticiasPorPagina;
    this.paginadoNoticias = this.noticias.slice(inicio, fin);
  }

  paginasArray(): number[] {
    return Array(this.totalPaginas).fill(0).map((_, i) => i + 1);
  }
}
