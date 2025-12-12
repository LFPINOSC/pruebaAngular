import { Injectable } from '@angular/core';
import { enverinmont } from '../../Enverinmont/enverinmont';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  private apiUrl=`${enverinmont.apiUrl1}/auth/login`;
  private loggenIn$=new BehaviorSubject<boolean>(this.isAuthenticated());
  constructor(private http:HttpClient, private router:Router) { }
  login(username:string, password: string ): Observable<any>{
    return new Observable(observer=>{
      this.http.post<any>(this.apiUrl,{username,password}).subscribe( 
        res =>{
            const payload=JSON.parse(atob(res.token.split('.')[1]));
            localStorage.setItem('token',res.token);
            localStorage.setItem('exp',payload.exp.toSting());
            localStorage.setItem('exp',payload.tipoUsuario.toSting());
            this.loggenIn$.next(true);
            this.router.navigate(['/dashboard']);
            observer.next(res);
            observer.complete();
        },
        err=>{
          observer.error(err);
        }
      )
    });
  }
  isAuthenticated(): boolean{
    const token=localStorage.getItem('token');
    const exp=localStorage.getItem('exp');
    if(!token || !exp) return false;
    const now = Math.floor(Date.now()/1000);
    const expiration=parseInt(exp,10);
    return true;
  }
}
