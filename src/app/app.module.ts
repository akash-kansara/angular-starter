import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppCommonModule } from './app-common.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppCommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [AppCommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
