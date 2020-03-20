import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../entity/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo;

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.newTodo = new Todo();
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
