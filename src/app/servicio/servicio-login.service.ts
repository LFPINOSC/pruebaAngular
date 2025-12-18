import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { enverinmont } from '../../Enverinmont/enverinmont';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  private apiUrl = `${enverinmont.apiUrl1}/auth/login`;
  private loggedIn$ = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(res => {
        const payload = JSON.parse(atob(res.token.split('.')[1]));

        localStorage.setItem('token', res.token);
        localStorage.setItem('exp', payload.exp.toString());
        localStorage.setItem('tipoUsuario', payload.tipoUsuario);

        this.loggedIn$.next(true);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.loggedIn$.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const exp = localStorage.getItem('exp');

    if (!token || !exp) return false;

    const now = Math.floor(Date.now() / 1000);
    return now < Number(exp); // valida expiración
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getTipoUsuario(): string | null {
    return localStorage.getItem('tipoUsuario');
  }

  isLoggedIn$(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
}
