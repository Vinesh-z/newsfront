import { LoginService } from './../login/login.service';
import { FacadeService } from './../services/facade.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationGuardService implements CanActivate {

  constructor(public facadeService: FacadeService, public router: Router, public loginService: LoginService) {
  }

  canActivate(): boolean {

    if (this.loginService.userLoggedIn) {
      if (!this.facadeService.getUserDataFromLocalStorage().permissions.post.create) {
        this.router.navigate(['/']);
        return false;
      }
      else
        return true;
    }
    else {
      return false;
    }
  }

}