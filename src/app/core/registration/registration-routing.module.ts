import { RegistrationGroupEditComponent } from './registration-group-edit/registration-group-edit.component';
import { RegistrationRolesComponent } from './registration-roles/registration-roles.component';
import { AdminRegistrationGuardService } from './admin-registration.service';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationGuardService } from './registration-guard.service';
import { RegistrationGroupComponent } from './registration-group/registration-group.component';

const routes: Routes = [
  {
    path: '',
    component:  RegistrationHomeComponent,
    canActivate: [RegistrationGuardService]
  },
  {
    path: 'roles',
    component:  RegistrationRolesComponent,
    canActivate: [AdminRegistrationGuardService]
  },
  {
    path: 'groups',
    component:  RegistrationGroupComponent,
    canActivate: [AdminRegistrationGuardService]
  },
  {
    path: 'edit-group',
    component: RegistrationGroupEditComponent,
    canActivate: [AdminRegistrationGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
