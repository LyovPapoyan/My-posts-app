import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public setUsersListToLocalStorage(usersList: IUser[]): void {
    localStorage.setItem('users', JSON.stringify(usersList))
  }

  public setUserToLocalStorage(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user))
  }

  public getUsersListFromLocalStorage(): IUser[] {
    return JSON.parse(localStorage.getItem('users')!)
  }

  public isLoggedIn(loginValue: IUser): boolean {
    if (!this.getUsersListFromLocalStorage()) {
      return false 
    } else {
      return !!this.getUsersListFromLocalStorage().find(user => 
        user.userName === loginValue.userName && 
        user.password === loginValue.password
      );
    }
  }

  public isAuthenticated(): boolean {    
    return !!localStorage.getItem('user')
  }

  public logOut(): void {
    localStorage.removeItem('user')
  }
}
