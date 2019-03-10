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
  wrongDetails;
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

  editGroup(id) {
    this.router.navigate(['/register/edit-group'], { queryParams: { id: id } });
  }

  saveGroup(data) {
    var already = [];
    this.allGroups.forEach(gr => {
      if(String(gr.name).toLowerCase() === String(data).toLowerCase())
        already.push(gr);
    });
    if(data.length>2 && already.length==0) {
      var requestData = {
        name: data
      }
      this.facadeService.saveGroup(requestData)
        .subscribe(
          res => {
            this.wrongDetails = false;
            this.ngOnInit();
          }
        )
    }
    else {
      this.wrongDetails = true;
    }
  }

}
