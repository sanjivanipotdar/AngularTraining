import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  login(user: string, password: string): boolean {
    if (user === 'ravi' && password === 'seed') {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('username', user);

        const status = localStorage.getItem('loggedInStatus');
        if (status === null || status === 'false') {
          localStorage.setItem('loggedInStatus', 'true');
        }
      }
      return true;
    }
    return false;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('username');
      localStorage.setItem('loggedInStatus', 'false');
    }
  }

  getUser(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('username');
    }
    return null;
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return this.getUser() !== null;
    }
    return false;
  }
}
