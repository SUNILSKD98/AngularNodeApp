import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./layout/admin/admin.component";
import { AuthComponent } from "./layout/auth/auth.component";


const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "",
        redirectTo: "auth/login",
        pathMatch: "full",
      },
      {
        path: "auth",
        loadChildren: "./theme/auth/auth.module#AuthModule",
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
