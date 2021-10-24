import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {
  loginfrm: FormGroup

  constructor(private route: Router,
    private auth_service: AuthService,
    private http: HttpClient,) { }

  ngOnInit() {

    this.loginfrm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
  }


  key_submit(event: any, flag) {
    if (this.loginfrm.valid) {
      this.loginfrm.value["login_type"] = "U";
      this.loginfrm.value["client_action"] = "LI";
        this.check_login(this.loginfrm.value);
    } else {
      (<any>Object).values(this.loginfrm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }


  }


  check_login(login_data) {
    this.auth_service.userLog(login_data).subscribe((res) => {
      let res_data = res["data"];
      console.log("inside check main login====", res);
      if (res_data["success"] == "Y") {
        localStorage.setItem("token", res_data["token"]);
      
        let token = res_data["token"];
        if (res_data["first_logon_status"] == "N") {
          this.route.navigate(["/welcome"]);
        } else if (res_data["first_logon_status"] == "Y") {
       
          this.route.navigate(["/auth/change-password"]);
        }
      }
      
    });
  }

}
