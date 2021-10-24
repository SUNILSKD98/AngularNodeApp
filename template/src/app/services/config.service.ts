import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
@Injectable()
export class ConfigService {
    public url = "";
    public newurl = "";
    public socketUrl=""
    constructor() {
        if (environment.prod == true) {
            this.newurl = "";
            this.socketUrl = "";
        }
        else {
            console.log("Inside Local host")
            this.newurl = "http://localhost:8080";
            this.socketUrl="http://localhost:8182"
        }
    }
}
