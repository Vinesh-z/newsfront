import { Router } from '@angular/router';
import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-ended-home',
  templateUrl: './session-ended-home.component.html',
  styleUrls: ['./session-ended-home.component.css']
})
export class SessionEndedHomeComponent implements OnInit {

  constructor(private facadeService: FacadeService, private router: Router) {

  }

  ngOnInit() {
    if(this.facadeService.errorGenerated) {
      this.facadeService.errorGenerated = false;
    }
    else {
      this.router.navigateByUrl('/');
    }
  }

}
