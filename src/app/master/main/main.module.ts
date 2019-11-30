import { NgModule } from "@angular/core";

import { MAIN_ROUTES } from "./main.routes";

import { MainComponent } from "./main.component";

@NgModule({
  declarations: [MainComponent],
  exports: [],
  providers: [],
  imports: [MAIN_ROUTES]
})
export class MainModule {}
