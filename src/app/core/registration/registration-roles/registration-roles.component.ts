import { FacadeService } from './../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-roles',
  templateUrl: './registration-roles.component.html',
  styleUrls: ['./registration-roles.component.css']
})
export class RegistrationRolesComponent implements OnInit {
  searchSet: boolean = false;
  allUsers;
  allUsersLoaded: boolean = false;
  allCategories;
  constructor(private registerSvc: RegistrationService, private facadeSvc: FacadeService) { }
  userData;
  ngOnInit() {
    this.userData = this.facadeSvc.getUserDataFromLocalStorage();
    this.registerSvc.getAllUsers().subscribe(
      res => {
        this.allUsers = res;
        this.registerSvc.getGroups().subscribe(
          data => {
            this.allCategories = data;
            this.allUsers.forEach(element => {
              element.groups = this.allCategories.filter(gr => gr._id != element.groupId);
              element.groupName = this.allCategories.filter(gr => gr._id === element.groupId)[0].name;
            });
            this.allUsersLoaded = true;
            console.log(this.allUsers);
            this.searchSet = true;
          }
        );
      }
    )
  }


  searchEmail(emailId) {
    var data = {
      "emailId": emailId.trim()
    }
    this.registerSvc.getUserByEmailId(data).subscribe(
      res => {
        this.allUsers = res.body;
        this.registerSvc.getGroups().subscribe(
          data => {
            this.allCategories = data;
            this.allUsers.forEach(element => {
              element.groups = this.allCategories.filter(gr => gr._id != element.groupId);
              element.groupName = this.allCategories.filter(gr => gr._id === element.groupId)[0].name;
            });
            this.allUsersLoaded = true;
            this.searchSet = true;
          }
          
        );

      }
    )
  }

  changeRole(groupId, userId) {
    var data = {
      groupId: groupId,
      userId: userId
    }
    console.log(data);
    this.registerSvc.changeGroupOfUser(data).subscribe(
      res => { this.ngOnInit(); }
    )
  }

  public onChange(event): void {
    if (event.target.value != 'Select') {
      if(this.searchSet) this.searchSet = false;
      this.changeRole(event.target.value.split(',')[0], event.target.value.split(',')[1]);
    }
  }

}
