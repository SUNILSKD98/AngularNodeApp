import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Login",
      status: false,
    },
    children: [
      {
        path: "main",
        loadChildren:
          "./main-login/main-login.module#MainLoginModule",
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
