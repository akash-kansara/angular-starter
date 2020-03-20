import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './entity/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(private api: ApiService) { }

  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  deleteTodoById(id: number): Observable<Todo> {
    return this.api.deleteTodoById(id);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Observable<Todo> {
    return this.api.getTodoById(id);
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }
}
