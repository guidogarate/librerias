import { RouterModule, Routes } from "@angular/router";
import { NotyComponent } from "./noty/noty.component";

const alertRoutes: Routes = [
  {
    path: "noty",
    component: NotyComponent,
    data: { titulo: "noty" }
  }
];

export const ALERT_MODULES_ROUTES = RouterModule.forChild(alertRoutes);
