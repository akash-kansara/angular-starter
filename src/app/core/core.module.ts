import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';



@NgModule({
  declarations: [
  ],
  providers: [
    AuthenticationService
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class CoreModule { }
