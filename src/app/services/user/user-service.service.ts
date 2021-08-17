import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  login(user: string) {
    localStorage.setItem('loggedInUser', user)

  }

  logout() {
    localStorage.setItem('loggedInUser', '')

  }

  getCurrentuser() {
    return localStorage.getItem('loggedInUser')
  }
}
