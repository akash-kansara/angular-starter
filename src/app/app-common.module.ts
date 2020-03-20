import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TodoDataService } from './todo-data.service';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { ApiService } from './api.service';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SessionService } from './session.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthService } from './auth.service';

let IMPORT = {
  MOD: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
};

let APP_MOD = {
  DIR_COMP: [
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent,
    SignInComponent,
  ],
  SERVICE: [
    TodoDataService,
    ApiService,
    SessionService,
    AuthService
  ]
};

@NgModule({
  declarations: [
    ...APP_MOD.DIR_COMP,
  ],
  imports: [
    ...IMPORT.MOD
  ],
  providers: [
    ...APP_MOD.SERVICE
  ],
  exports: [
    ...IMPORT.MOD,
    ...APP_MOD.DIR_COMP,
  ]
})

export class AppCommonModule { }
