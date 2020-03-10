import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { User } from '../entity/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: string = '';
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = localStorage.getItem('currentUser');
    this.users = this.userService.getAll();
  }

}
