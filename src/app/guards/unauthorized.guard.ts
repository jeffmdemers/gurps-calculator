import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../services/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuard implements CanActivate {
  constructor(private authService: AuthorizeService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !this.authService.isAuthorized();
  }
}
