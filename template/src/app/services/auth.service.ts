import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from "./config.service";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    private url: any;
    private listners = new Subject<any>();
    private newurl: any;
    constructor(public http: HttpClient, public config: ConfigService) {
        this.url = this.config.url;
        this.newurl = this.config.newurl;
    }


    listen(): Observable<any> {
        return this.listners.asObservable();
    }

    trigger() {
        this.listners.next("Profile Pic Load");
    }
    userLog(data) {
        console.log("inside userLog auth service==>>", data)
        return this.http.post(this.newurl + "/check_login/login", data)
    }



}
