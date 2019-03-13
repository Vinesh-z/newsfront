import { OtherErrorsComponent } from './other-errors/other-errors.component';
import { SessionEndedHomeComponent } from './session-ended-home/session-ended-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:  SessionEndedHomeComponent
  },
  {
    path: 'error',
    component: OtherErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionEndedRoutingModule { }
