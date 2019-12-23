import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { FORM_MODULES_ROUTES } from "./form.routes";

import { CheckRadiosComponent } from "./check-radios/check-radios.component";
import { DateComponent } from "./date/date.component";
import { ValidacionComponent } from './validacion/validacion.component';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [CheckRadiosComponent, DateComponent, ValidacionComponent, SelectComponent, TableComponent],
  providers: [],
  imports: [CommonModule, FORM_MODULES_ROUTES, FormsModule]
})
export class FormModule {}
