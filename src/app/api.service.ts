import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Todo } from './entity/todo';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private session: SessionService
  ) {
  }

  public signIn(username: string, password: string) {
    return this.http
      .post(API_URL + '/sign-in', {
        username,
        password
      });
  }

  public getAllTodos(): Observable<Todo[]> {
    const options = this.getRequestOptions();
    return this.http
      .get<Todo[]>(API_URL + '/todos', options)
      .pipe(
        map(response => {
          const todos = <any[]> response;
          return todos.map((todo) => new Todo(todo));
        })
      );
  }

  public createTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .post<Todo>(API_URL + '/todos', todo, options)
      .pipe(
        map(response => {
          return new Todo(response);
        })
      );
  }

  public getTodoById(todoId: number): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .get<Todo>(API_URL + '/todos/' + todoId, options)
      .pipe(
        map(response => {
          return new Todo(response);
        })
      );
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const options = this.getRequestOptions();
    return this.http
      .put<Todo>(API_URL + '/todos/' + todo.id, todo, options)
      .pipe(
        map(response => {
          return new Todo(response);
        })
      );
  }

  public deleteTodoById(todoId: number): Observable<null> {
    const options = this.getRequestOptions();
    return this.http
      .delete<null>(API_URL + '/todos/' + todoId, options)
      ;
  }

  private handleError(error: HttpErrorResponse | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  private getRequestOptions() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.session.accessToken
    });
    return { headers };
  }
}