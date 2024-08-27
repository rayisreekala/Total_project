import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  user: any;
  constructor() {}
  canActivate() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      return true;
    }
    return false;
  }
}
