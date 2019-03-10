import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { RegistrationRolesComponent } from './registration-roles/registration-roles.component';
import { RegistrationGroupComponent } from './registration-group/registration-group.component';
import { RegistrationPermissionsComponent } from './registration-permissions/registration-permissions.component';
import { RegistrationGroupEditComponent } from './registration-group-edit/registration-group-edit.component';
import { KeysPipe } from './group-pipe.pipe';

@NgModule({
  declarations: [ KeysPipe, RegistrationHomeComponent, RegistrationRolesComponent, RegistrationGroupComponent, RegistrationPermissionsComponent, RegistrationGroupEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
