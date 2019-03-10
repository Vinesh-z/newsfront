import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeoutComponent } from './timeout/timeout.component';

const routes: Routes = [{
  path: '',
  component: TimeoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeouterrRoutingModule { }
