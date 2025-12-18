import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicioLoginService } from './servicio/servicio-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: ServicioLoginService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
