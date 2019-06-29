import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

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
    });
  }

  isAuthorized() {
    return localStorage.getItem(this.key) !== null;
  }

  deauthorized() {
    localStorage.removeItem(this.key);
  }
}
