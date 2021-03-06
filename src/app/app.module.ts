import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTES } from "./app.routes";
import { MainModule } from "./master/main/main.module";

import { FormsModule } from "@angular/forms";
import { DeviceDetectorModule } from "ngx-device-detector";
import { AppComponent } from "./app.component";

import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    APP_ROUTES,
    MainModule,
    FormsModule,
    CommonModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
