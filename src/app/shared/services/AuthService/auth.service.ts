import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string;

  constructor() {
    // For demonstration, we're setting the role directly. 
    // You would normally get this from an API or local storage.
    this.userRole = 'client'; // or 'lawyer'
  }

  getRole(): string {
    return this.userRole;
  }

 
  setRole(role: string) {
    this.userRole = role;
  }
}
