import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTES } from "./app.routes";
import { MainModule } from "./master/main/main.module";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, APP_ROUTES, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
