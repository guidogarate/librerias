import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotyComponent } from './noty/noty.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    NotyComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
