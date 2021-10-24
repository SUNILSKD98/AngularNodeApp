import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ConfigService } from "./config.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class AdminServices {

    private url: any;
    private newurl: any;
    constructor(private http: HttpClient, private config: ConfigService) {
        this.newurl = this.config.newurl;
        this.url = this.config.url;
    }

    getMenuItem(rawdata) {
        return this.http.post(this.newurl + '/admin/get-menu', rawdata);
    }

      
}
