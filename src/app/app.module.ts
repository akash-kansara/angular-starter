import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppCommonModule } from './app-common.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppCommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [AppCommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
