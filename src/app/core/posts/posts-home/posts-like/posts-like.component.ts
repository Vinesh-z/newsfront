import { Router } from '@angular/router';
import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-posts-like',
  templateUrl: './posts-like.component.html',
  styleUrls: ['./posts-like.component.css']
})
export class PostsLikeComponent implements OnInit {

  currentPermissions;
  userData;
  allPosts = [];
  allPostsLoaded: boolean = false;
  constructor(private router: Router, private facadeService: FacadeService) { }

  ngOnInit() {
    if (this.facadeService.getUserDataFromLocalStorage()) {
      this.currentPermissions = this.facadeService.getUserDataFromLocalStorage().permissions;
      this.userData = this.facadeService.getUserDataFromLocalStorage();
    }
    else {
      this.router.navigateByUrl('/');
    }
    this.facadeService.findLikesByUserId(this.userData.userId).subscribe(
      res => {
        if (res) {
          if (res.length > 0) {
            res.forEach(element => {
              this.facadeService.getPostById(element.postId).subscribe(
                post => {
                  this.allPosts.push(post);
                  if (res.length == this.allPosts.length) {
                    this.allPosts.forEach(elem => {
                      if (!elem.postImage) {
                        if (elem.urlToImage)
                        elem.postImage = elem.urlToImage;
                        else
                        elem.postImage = 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg';
                      }
                      else {
                        //console.log(elem.postImage);
                        elem.postImage = 'http://localhost:3000/' + elem.postImage;
                      }
                      elem.summary = elem.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40);
                    })
                    this.allPostsLoaded = true;
                  }
                }
              )
            });
          }
          else {
            this.allPostsLoaded = true;
          }
        }
      }
    )

  }

}
