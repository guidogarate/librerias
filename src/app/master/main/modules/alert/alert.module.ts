import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ALERT_MODULES_ROUTES } from "./alert.routes";

import { NotyComponent } from "./noty/noty.component";

@NgModule({
  declarations: [NotyComponent],
  providers: [],
  imports: [CommonModule, ALERT_MODULES_ROUTES, FormsModule]
})
export class FormModule {}
