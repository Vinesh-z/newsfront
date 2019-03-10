import { ProfileguardService } from './profileguard.service';
import { UserprofileHomeComponent } from './userprofile-home/userprofile-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserprofileEditComponent } from './userprofile-edit/userprofile-edit.component';

const routes: Routes = [
  {
    path: '',
    component:  UserprofileHomeComponent,
    canActivate: [ProfileguardService]
  },
  {
    path: 'edit-user',
    component:  UserprofileEditComponent,
    canActivate: [ProfileguardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofileRoutingModule { }
