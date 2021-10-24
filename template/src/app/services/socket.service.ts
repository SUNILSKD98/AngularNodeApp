import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Observable } from "rxjs";
import { Subject } from "rxjs";
import * as jwt_decode from "jwt-decode";
@Injectable()
export class SocketService {
  public socket;
  public outletId;
  public url: any;
  public idobj = {};
  public docsStatusListener = new Subject<any>();

  constructor(private http: HttpClient, private config: ConfigService) {
    this.url = this.config.socketUrl;
    this.socket.on("docsstatus", (data: any) => {
      this.triggerDocsEvent(data);
    });
  }

  listenDocsEvent(): Observable<any> {
    return this.docsStatusListener.asObservable();
  }

  triggerDocsEvent(rawData) {
    this.docsStatusListener.next(rawData);
  }

  setupSocketConnection = async () => {
    if ("token" in localStorage) {
      let token = await jwt_decode(localStorage.getItem("token"));
      this.outletId = token["token_record"]["outlet"];
      this.socket.emit("joinRoom", { id: this.outletId });
    } else {
      console.log("No token");
    }
  };

  leaveSocketRoom = async () => {
    if ("token" in localStorage) {
      let token = await jwt_decode(localStorage.getItem("token"));
      this.outletId = token["token_record"]["outlet"];
      this.socket.emit("leaveRoom", this.outletId);
    } else {
      console.log("No token");
    }
  };
}
