import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./layout/admin/admin.component";
import { AuthComponent } from "./layout/auth/auth.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { ConfigService } from "./services/config.service";
import { AdminServices } from "./services/admin.service";
import { InterceptorService } from "./services/interceptor.service";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { OrgchartModule } from "@dabeng/ng-orgchart";
import { FileUploadModule } from "ng2-file-upload";
import { SelectModule } from "ng-select";
import { AuthService } from "./services/auth.service";
import { MenuItems } from "./shared/menu-items/menu-items";
import { TempDataService } from "./services/temp-data.service";
import { SocketService } from "./services/socket.service";
;



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    OrgchartModule,
    FileUploadModule,
    SelectModule,
    ReactiveFormsModule,
   
  ],
  providers: [
    SocketService,
    TempDataService,
    MenuItems,
    AuthService,
    ConfigService,
    AdminServices,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

