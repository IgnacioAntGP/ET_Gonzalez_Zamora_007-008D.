import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DesactivadoGuard implements CanActivate {
  
  constructor(private router: Router, private authservice : AuthService) {}

  canActivate(): boolean {
    if (this.authservice.IsLoggedIn()) {
      this.router.navigate(['/alumno']);
      return false;
    }
    return true;
  }
}

