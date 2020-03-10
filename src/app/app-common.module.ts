import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './core/core.module';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';


let IMPORT_MODS = [
  FormsModule,
  ReactiveFormsModule,
  CoreModule,
  CommonModule,
  AppRoutingModule
];

let IMPORT_DIRS_COMPS = [

];

let EXPORT_DIRS_COMPS = [
  RegisterComponent,
  HomeComponent,
  LoginComponent
];

@NgModule({
  declarations: [
    ...IMPORT_DIRS_COMPS,
    ...EXPORT_DIRS_COMPS,
  ],
  imports: [
    ...IMPORT_MODS
  ],
  exports: [
    ...IMPORT_MODS,
    ...EXPORT_DIRS_COMPS
  ]
})

export class AppCommonModule { }
