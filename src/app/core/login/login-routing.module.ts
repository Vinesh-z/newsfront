import { LoginGuardService } from './login-guard.service';
import { LoginHomeComponent } from './login-home/login-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  LoginHomeComponent,
    canActivate: [LoginGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
