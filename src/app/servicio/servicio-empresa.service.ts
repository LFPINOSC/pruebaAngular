import { Injectable } from '@angular/core';
import { enverinmont } from '../../Enverinmont/enverinmont';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Empresa } from '../Entidades/Empresa';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresaService {
  private apiUrl=`${enverinmont.apiUrl}/empresas`
  constructor( private http:HttpClient) { }
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token'); // o sessionStorage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  listar(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  } 
  obtener(id:number):Observable<Empresa>{
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`)
  }
  crea(empresa:Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.apiUrl,empresa);
  }
  editar(id: number, empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/${id}`, empresa, {
      headers: this.getHeaders()
    });
  }
}
