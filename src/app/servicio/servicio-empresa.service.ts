import { Injectable } from '@angular/core';
import { enverinmont } from '../../Enverinmont/enverinmont';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { Empresa } from '../Entidades/Empresa';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresaService {
  private apiUrl=`${enverinmont.apiUrl}/empresas`
  constructor( private http:HttpClient) { }
  listar(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.apiUrl);
  } 
  obtener(id:number):Observable<Empresa>{
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`)
  }
  crea(empresa:Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.apiUrl,empresa);
  }
}
