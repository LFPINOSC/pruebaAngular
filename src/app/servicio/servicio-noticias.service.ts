import { Injectable } from '@angular/core';
import { enverinmont } from '../../Enverinmont/enverinmont';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../Entidades/Noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioNoticiasService {
  private apiUrl=`${enverinmont.apiUrl1}/noticias`
  constructor(private http:HttpClient) { }
   listar(): Observable<Noticia[]> {
      return this.http.get<Noticia[]>(this.apiUrl);
    } 
    obtener(id:number):Observable<Noticia>{
      return this.http.get<Noticia>(`${this.apiUrl}/${id}`)
    }
    crea(nombre:Noticia): Observable<Noticia>{
      return this.http.post<Noticia>(this.apiUrl,nombre);
    }
}
