import { FacadeService } from './../../services/facade.service';
import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-userprofile-home',
  templateUrl: './userprofile-home.component.html',
  styleUrls: ['./userprofile-home.component.css']
})
export class UserprofileHomeComponent implements OnInit {

  currentPermissions;
  userData;
  likes = [];
  dislikes = [];
  comments;
  commentsLoaded: boolean = false;
  userDataLoaded: boolean = false;
  constructor(private router: Router, private loginService: LoginService, private facadeService: FacadeService) { }

  ngOnInit() {
    if (this.facadeService.getUserDataFromLocalStorage()) {
      this.currentPermissions = this.facadeService.getUserDataFromLocalStorage().permissions;
      this.userData = this.facadeService.getUserDataFromLocalStorage();
    }
    //this.userData.createdAtParsed = moment(this.userData.createdAt).calendar();

    this.facadeService.findLikesByUserId(this.userData.userId).subscribe(
      res => {
        this.likes = res;
        this.facadeService.findDislikesByUserId(this.userData.userId).subscribe(
          res2 => {
            this.dislikes = res2;
            this.facadeService.getCommentsByUserId(this.userData.userId).subscribe(
              res3 => {
                this.comments = res3;
                this.facadeService.getUsernameById(this.userData.userId).subscribe(
                  res => {
                    if (res.picture)
                      this.userData.picture = res.picture;

                    this.commentsLoaded = true;

                    this.userDataLoaded = true;
                  }
                )

              },
              //  error => {}
            );
          },
          //   error=> {}
        )
      },
      // error => { }
    )

  }

}
