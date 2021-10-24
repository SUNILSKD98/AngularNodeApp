import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainLoginComponent } from "./main-login.component";
import { MainLoginRoutingModule } from "./main-login-routing.module";



@NgModule({
  imports: [
    CommonModule,
    MainLoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MainLoginComponent],
  providers: [],
})
export class MainLoginModule {}
