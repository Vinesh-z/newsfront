import { FacadeService } from './../core/services/facade.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { LoginService } from './../core/login/login.service';
import { Injectable, Injector, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
  constructor(private router: Router, private loginService: LoginService, private facadeService: FacadeService) { }
  token: string;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = (this.loginService.getUserDataFromLocalStorage() != null) ? (this.loginService.getUserDataFromLocalStorage().token) : 'guest';

    const copiedReq = req.clone({ headers: req.headers.set('token', this.token) });
    /*console.log('inter' + ' ' + this.token);
    console.log(copiedReq);*/
    return next.handle(copiedReq)
     /* .pipe(catchError(err => {
        if (err instanceof HttpErrorResponse) {
          
          if (err.status === 0) {
            this.facadeService.errorGenerated = true;
            this.router.navigateByUrl('/error');
          }
        }
        return Observable.throw(err);
      }))*/;
  }
}
