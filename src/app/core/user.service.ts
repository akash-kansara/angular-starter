import { Injectable } from '@angular/core';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
  constructor() { }
  register(user: User) {
    this.users.push(user);
  }
  getAll() {
    return this.users;
  }
  auth(username: string, password: string) {
    if (this.users.filter((e) => e.username == username && e.password == password).length > 0) return true;
    else return false;
  }
}
