import { FacadeService } from './../../services/facade.service';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-home',
  templateUrl: './registration-home.component.html',
  styleUrls: ['./registration-home.component.css']
})
export class RegistrationHomeComponent implements OnInit {

  addUserForm: FormGroup;
  detailsCorrectlyFilled: boolean = false;
  wrongData = [false, false, false, false];
  wrongDetails: boolean = false;
  constructor(private router: Router, private location: Location, private facadeService: FacadeService) { }

  ngOnInit() {
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
        Validators.required,
        Validators.minLength(1)
      ])
    });

  }

  onAddUser(confirmPass) {
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
    if (this.addUserForm.get('password').invalid) {
      this.wrongData[2] = true;
    }
    else {
      this.wrongData[2] = false;
    }
    if (this.addUserForm.value.password === confirmPass) {
      this.wrongData[3] = false;
    }
    else {
      this.wrongData[3] = true;
    }
    if(this.wrongDetails) {
      this.wrongDetails = false;
    }

    if (this.addUserForm.valid && !this.addUserForm.get('username').invalid && !this.addUserForm.get('emailId').invalid && this.addUserForm.value.password.length > 0 && this.addUserForm.value.password === confirmPass) {
      var requestData = {
        username: this.addUserForm.value.username,
        emailId: this.addUserForm.value.emailId,
        password: this.addUserForm.value.password,
        groupId: '5c59ab429b64fd14cc9ed84c'
      };
      this.facadeService.registerUser(requestData).subscribe(
        res => { this.router.navigateByUrl('/'); },
        error => { this.wrongDetails = true; }
      )
    }
    else {
      this.detailsCorrectlyFilled = false;
    }
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
