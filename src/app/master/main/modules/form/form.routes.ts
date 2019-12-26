import { RouterModule, Routes } from "@angular/router";
import { CheckRadiosComponent } from "./check-radios/check-radios.component";
import { DateComponent } from "./date/date.component";
import { ValidacionComponent } from "./validacion/validacion.component";
import { SelectComponent } from "./select/select.component";
import { TableComponent } from "./table/table.component";

const formRoutes: Routes = [
  {
    // ok
    path: "check-radios",
    component: CheckRadiosComponent,
    data: { titulo: "check-radios" }
  },
  {
    // cambiar por otro (para movil)
    path: "date",
    component: DateComponent,
    data: { titulo: "date" }
  },
  {
    // ok
    path: "validacion",
    component: ValidacionComponent,
    data: { titulo: "validacion" }
  },
  {
    // ok
    path: "select",
    component: SelectComponent,
    data: { titulo: "select" }
  },
  {
    // ok
    path: "table",
    component: TableComponent,
    data: { titulo: "table" }
  }
];

export const FORM_MODULES_ROUTES = RouterModule.forChild(formRoutes);
