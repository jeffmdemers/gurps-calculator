import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  private key = 'Authorization';

  constructor(private apiService: ApiService) {}
  login(username: string, password: string) {
    return this.apiService.post('User/Login', {
      username: username,
      password: password,
    }).pipe(tap(response => {
      this.authorize(response['jwt']);
    }));
  }

  isAuthorized() {
    return localStorage.getItem(this.key) !== null;
  }

  authorize(auth) {
    localStorage.setItem(this.key, auth);
  }

  deauthorized() {
    localStorage.removeItem(this.key);
  }
}
