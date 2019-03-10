import { FacadeService } from './../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-group',
  templateUrl: './registration-group.component.html',
  styleUrls: ['./registration-group.component.css']
})
export class RegistrationGroupComponent implements OnInit {

  allGroups;
  allGroupsLoaded: boolean = false;

  constructor(private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.facadeService.getGroups().subscribe(
      res => {
        this.allGroups = res;
        this.allGroupsLoaded = true;
      }
    )
  }

}
