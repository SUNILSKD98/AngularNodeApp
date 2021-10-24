import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
@Injectable()
export class InterceptorService implements HttpInterceptor{
   intercept(req : HttpRequest<any>,next : HttpHandler) : Observable<HttpEvent<any>>{
       if(localStorage.getItem('token')) {
           
           var newReq = req.clone({headers : req.headers.append('Authorization',localStorage.getItem('token'))})
       }else{
       newReq = req.clone({ headers: req.headers.set('Content-Type','application/json')});
       }
       return next.handle(newReq)
   }
}