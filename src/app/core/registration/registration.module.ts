import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { RegistrationRolesComponent } from './registration-roles/registration-roles.component';
import { RegistrationGroupComponent } from './registration-group/registration-group.component';
import { RegistrationPermissionsComponent } from './registration-permissions/registration-permissions.component';
import { RegistrationGroupAddComponent } from './registration-group-add/registration-group-add.component';
@NgModule({
  declarations: [RegistrationHomeComponent, RegistrationRolesComponent, RegistrationGroupComponent, RegistrationPermissionsComponent, RegistrationGroupAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
