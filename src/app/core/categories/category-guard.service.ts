import { LoginService } from './../login/login.service';
import { FacadeService } from './../services/facade.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryGuardService implements CanActivate {

  constructor(public facadeService: FacadeService, public router: Router, public loginService: LoginService) {
  }

  canActivate(): boolean {

    if (!this.loginService.userLoggedIn) {
      this.router.navigateByUrl('/');
      return false;
    }
    else if (!this.facadeService.getUserDataFromLocalStorage().permissions.category.create) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}