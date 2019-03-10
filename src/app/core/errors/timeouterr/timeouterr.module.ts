import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeouterrRoutingModule } from './timeouterr-routing.module';
import { TimeoutComponent } from './timeout/timeout.component';

@NgModule({
  declarations: [TimeoutComponent],
  imports: [
    CommonModule,
    TimeouterrRoutingModule
  ]
})
export class TimeouterrModule { }
