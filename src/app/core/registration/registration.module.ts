import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationHomeComponent } from './registration-home/registration-home.component';
import { RegistrationRolesComponent } from './registration-roles/registration-roles.component';
@NgModule({
  declarations: [RegistrationHomeComponent, RegistrationRolesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
