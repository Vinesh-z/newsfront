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
        this.registerSvc.getRoles().subscribe(
          data => {
            this.allCategories = data;
            this.allUsers.forEach(element => {
              element.roles = this.allCategories.filter(role => role != element.roleName);
              console.log(element.roles);
            });
            this.allUsersLoaded = true;
          },
          error => { console.log(error); }
        );
      },
      error => { console.log(error); }
    )
  }


  searchEmail(emailId) {
    var data = {
      "emailId": emailId.trim()
    }
    this.registerSvc.getUserByEmailId(data).subscribe(
      res => {
        this.allUsers = res.body;
        this.registerSvc.getRoles().subscribe(
          data => {
            this.allCategories = data;
            this.allUsers.forEach(element => {
              element.roles = this.allCategories.filter(role => role != element.roleName);
              console.log(element.roles);
            });
            this.allUsersLoaded = true;
            this.searchSet = true;
          },
          error => { console.log(error); }
        );

        console.log(this.allUsers);
      },
      error => { console.log(error); }
    )
  }

  changeRole(roleName, emailId) {
    var data = {
      roleName: roleName,
      emailId: emailId
    }
    this.registerSvc.changeRole(data).subscribe(
      res => { this.ngOnInit(); },
      error => { console.log(error); }
    )
  }

  public onChange(event): void {
    if(this.searchSet) this.searchSet = false;
    this.changeRole(event.target.value.split(',')[0], event.target.value.split(',')[1]);
  }

}
