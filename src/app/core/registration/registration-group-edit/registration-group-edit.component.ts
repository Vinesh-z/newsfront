import { Location } from '@angular/common';
import { FacadeService } from './../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration-group-edit',
  templateUrl: './registration-group-edit.component.html',
  styleUrls: ['./registration-group-edit.component.css']
})
export class RegistrationGroupEditComponent implements OnInit {

  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private facadeService: FacadeService) { }
  thisGroup;
  allGroups;
  groupId;
  wrongDetails: boolean = false;
  thisGroupLoaded: boolean = false;
  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        if (!params.id) {
          this.router.navigateByUrl('/register/groups');
        }
        else {
          this.groupId = params.id;
        }
      });

    this.facadeService.getGroups().subscribe(
      res => {
        this.allGroups = res;
        if (this.allGroups.filter(elem => elem._id === this.groupId).length == 0) {
          this.router.navigateByUrl('/register/groups');
        }
        else {
          this.thisGroup = this.allGroups.filter(elem => elem._id === this.groupId)[0];
          this.thisGroupLoaded = true;
        }
      }
    )
  }

  updateGroup(data) {
    var already = [];
    this.allGroups.forEach(gr => {
      if (String(gr.name).toLowerCase() === String(data).toLowerCase())
        if (gr._id != this.groupId)
          already.push(gr);
    });

    if (data.length > 2 && already.length == 0) {
      var requestData = {
        _id: this.groupId,
        name: data,
        permissions: this.thisGroup.permissions
      }
      console.log(requestData);
      /*
      this.facadeService.saveGroup(requestData)
        .subscribe(
          res => {
            this.wrongDetails = false;
            this.ngOnInit();
          }
        )*/
    }
    else {
      this.wrongDetails = true;
    }
  }

}
