import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { MainComponent } from "./main.component";

const mainRoutes: Routes = [
  {
    path: "components",
    component: MainComponent,
    loadChildren: "./modules/modules.module#ModulesModule"
  },
  {
    path: "",
    redirectTo: "/components/form/select",
    pathMatch: "full"
  }
  // {
  //   path: "",
  //   redirectTo: "/components/alert/noty",
  //   pathMatch: "full"
  // }
];

export const MAIN_ROUTES = RouterModule.forRoot(mainRoutes, {
  preloadingStrategy: PreloadAllModules
});
