import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileRoutingModule } from './userprofile-routing.module';
import { UserprofileHomeComponent } from './userprofile-home/userprofile-home.component';
import { UserprofileEditComponent } from './userprofile-edit/userprofile-edit.component';

@NgModule({
  declarations: [UserprofileHomeComponent, UserprofileEditComponent],
  imports: [
    CommonModule,
    UserprofileRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserprofileModule { }
