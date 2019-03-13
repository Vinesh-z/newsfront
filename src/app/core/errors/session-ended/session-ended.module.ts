import { SessionEndedRoutingModule } from './session-ended-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionEndedHomeComponent } from './session-ended-home/session-ended-home.component';
import { OtherErrorsComponent } from './other-errors/other-errors.component';
@NgModule({
  declarations: [SessionEndedHomeComponent, OtherErrorsComponent],
  imports: [
    CommonModule,
    SessionEndedRoutingModule
  ]
})
export class SessionEndedModule { }
