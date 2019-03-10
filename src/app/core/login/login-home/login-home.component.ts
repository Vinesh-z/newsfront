import { Location } from '@angular/common';
import { FacadeService } from './../../services/facade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  passNotMatching: boolean = false;
  formSubmitted: boolean = false;
  formSubmittedPass: boolean = false;
  wrongDetails: boolean = false;
  loginForm: FormGroup;
  detailsCorrectlyFilled: boolean = false;
  constructor(private loginSvc: LoginService,
    private socialAuthService: AuthService,
    private router: Router,
    private location: Location, private facadeService: FacadeService) { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        var userDataNew = { idToken: userData.idToken };
        this.loginSvc.validateGoogle(userDataNew).subscribe(
          res => {
            console.log(res);
            this.facadeService.setUserPermissionsInLocalStorage(res.headers.get('authorization'));
            console.log(this.facadeService.getUserPermissionsFromLocalStorage());
            if (this.facadeService.getUserPermissionsFromLocalStorage()) {
              this.facadeService.setUserDataInLocalStorage(res.body);
              console.log(this.facadeService.getUserDataFromLocalStorage());
              var oldDateObj = new Date();
              var newDateObj = new Date();
              newDateObj.setTime(oldDateObj.getTime() + (60 * 60 * 1000));
              localStorage.setItem("expiryTime", String(newDateObj));
              this.router.navigateByUrl('/');
            }
            else {
              this.wrongDetails = true;
            }


          },
          //err => { console.log(err); }
        )
      },
      //error => { console.log(error); }
    );
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
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
   /* this.loginForm.controls['emailId'].valueChanges.subscribe(
      rr => { console.log(rr) }
    ) */
  }

  onLogin() {
    if (this.loginForm.get('emailId').invalid) {
      this.formSubmitted = true;
    }
    else {
      this.formSubmitted = false;
    }
    if (this.loginForm.get('password').invalid) {
      this.formSubmittedPass = true;
    }
    else {
      this.formSubmittedPass = false;
    }

    if (!this.loginForm.get('emailId').invalid && !this.loginForm.get('password').invalid) {
      
      var requestData = {
        emailId: this.loginForm.value.emailId,
        password: this.loginForm.value.password
      };
      var s = 'hh';
      this.facadeService.loginUser(requestData).subscribe(
        res => {
          console.log(res);
          this.facadeService.setUserPermissionsInLocalStorage(res.headers.get('authorization'));
         
          if (this.facadeService.getUserPermissionsFromLocalStorage()) {
            this.facadeService.setUserDataInLocalStorage(res.body);
            var oldDateObj = new Date();
            var newDateObj = new Date();
           // newDateObj.setTime(oldDateObj.getTime() + (60 * 60 * 1000));
           // localStorage.setItem("expiryTime", String(newDateObj));
            this.router.navigateByUrl('/');
          }
          else {
            this.wrongDetails = true;
          }
        },
        error => { 
          this.wrongDetails = true; }
      );
    }
    else {
      this.detailsCorrectlyFilled = false;
    }
  }

  goBack() {
    this.location.back();
  }
}
