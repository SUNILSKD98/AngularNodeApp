import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../../shared/shared.module';
// import { MainLoginComponent } from './main-login/main-login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: []
})
export class LoginModule { }
