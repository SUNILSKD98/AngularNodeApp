import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Authentication",
      status: false,
    },
    children: [
      {
        path: "login",
        // redirectTo: "login/applicant",
        redirectTo: "login/main",
        pathMatch: "full",
      },
      {
        path: "login",
        loadChildren: "./login/login.module#LoginModule",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
