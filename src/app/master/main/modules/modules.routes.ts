import { RouterModule, Routes } from "@angular/router";

import { ModulesComponent } from "./modules.component";

const modulesRoutes: Routes = [
  {
    path: "form",
    component: ModulesComponent,
    loadChildren: "./form/form.module#FormModule"
  },
  {
    path: "alert",
    component: ModulesComponent,
    loadChildren: "./alert/alert.module#FormModule"
  }
];

export const MODULES_ROUTES = RouterModule.forChild(modulesRoutes);
