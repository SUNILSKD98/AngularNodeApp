import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLoginComponent } from "./main-login.component";

const routes: Routes = [
  {
    path: "",
    component: MainLoginComponent,
    data: {
      title: "Main Login",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLoginRoutingModule {}
