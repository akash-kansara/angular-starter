import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private userService: UserService
  ) { }

  public login(username: string, password: string) {
    let authRes = this.userService.auth(username, password);
    if (authRes) {
      localStorage.setItem('currentUser', username);
    }
    return authRes;
  }

  public logout() {
    localStorage.removeItem('currentUser')
  }

}
