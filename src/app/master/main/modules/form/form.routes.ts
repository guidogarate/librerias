import { RouterModule, Routes } from "@angular/router";
import { CheckRadiosComponent } from "./check-radios/check-radios.component";
import { DateComponent } from "./date/date.component";

const formRoutes: Routes = [
  {
    path: "check-radios",
    component: CheckRadiosComponent,
    data: { titulo: "check" }
  },
  {
    path: "date",
    component: DateComponent,
    data: { titulo: "date" }
  }
];

export const FORM_MODULES_ROUTES = RouterModule.forChild(formRoutes);
