import { RouterModule, Routes } from "@angular/router";
import { CheckRadiosComponent } from "./check-radios/check-radios.component";
import { DateComponent } from "./date/date.component";
import { ValidacionComponent } from "./validacion/validacion.component";
import { SelectComponent } from "./select/select.component";

const formRoutes: Routes = [
  {
    // ok
    path: "check-radios",
    component: CheckRadiosComponent,
    data: { titulo: "check" }
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
    data: { titulo: "date" }
  },
  {
    // cambiar por otro (para movil)
    path: "select",
    component: SelectComponent,
    data: { titulo: "date" }
  }
];

export const FORM_MODULES_ROUTES = RouterModule.forChild(formRoutes);
