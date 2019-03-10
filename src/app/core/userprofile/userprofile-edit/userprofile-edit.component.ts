import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacadeService } from './../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile-edit',
  templateUrl: './userprofile-edit.component.html',
  styleUrls: ['./userprofile-edit.component.css']
})
export class UserprofileEditComponent implements OnInit {
  addUserForm: FormGroup;
  detailsCorrectlyFilled: boolean = false;
  wrongData = [false, false, false, false];
  wrongDetails: boolean = false;
  constructor(private router: Router, private location: Location, private facadeService: FacadeService) { }
  userData;
  currentPermissions;
  dataLoaded: boolean = false;
  ngOnInit() {
    if (this.facadeService.getUserDataFromLocalStorage()) {
      this.currentPermissions = this.facadeService.getUserDataFromLocalStorage().permissions;
      this.userData = this.facadeService.getUserDataFromLocalStorage();
    }
    this.addUserForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ]),
      emailId: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("^[a-zA-Z]+[0-9a-zA-Z.%_-]+@[a-zA-Z]+.(com|in|org|net|COM|IN|NET|ORG|co.in)$")
      ]),
      password: new FormControl(null, [
        Validators.minLength(1)
      ])
    });
    this.addUserForm.patchValue({
      username: this.userData.username,
      emailId: this.userData.emailId,
      password: ''
    });
    this.dataLoaded = true;

  }
  onAddUser() {
    if (this.addUserForm.get('emailId').invalid) {
      this.wrongData[1] = true;
    }
    else {
      this.wrongData[1] = false;
    }
    if (this.addUserForm.get('username').invalid) {
      this.wrongData[0] = true;
    }
    else {
      this.wrongData[0] = false;
    }
    if (this.wrongDetails) {
      this.wrongDetails = false;
    }
    if (!this.addUserForm.get('username').invalid && !this.addUserForm.get('emailId').invalid) {

      var requestData = {
        userId: this.userData.userId,
        username: this.addUserForm.value.username,
        emailId: this.addUserForm.value.emailId,
        password: this.addUserForm.value.password
      };
      this.facadeService.updateUser(requestData).subscribe(
        res => { this.router.navigateByUrl('/'); },
        error => { this.wrongDetails = true; }
      )
    }
    else {
      this.detailsCorrectlyFilled = false;
    }
  }
  goBack() {
    this.location.back();
  }
}
