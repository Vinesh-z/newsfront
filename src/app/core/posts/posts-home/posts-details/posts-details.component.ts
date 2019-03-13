import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacadeService } from './../../../services/facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { LoginService } from 'src/app/core/login/login.service';
import { Speech } from 'speak-tts';

import * as readingtime from "reading-time";
@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  addCommentForm: FormGroup;
  addCommentReplyForm: FormGroup;
  thisPost;
  userLiked: boolean = false;
  userDisliked: boolean = false;
  likeDataLoaded: boolean = false;
  thisPostLoaded: boolean = false;
  allComments;
  currentPermissions;
  userData;
  allCategories;
  allPosts;
  allPostsLoaded;
  allCommentsLoaded: boolean = false;
  constructor(private loginService: LoginService, private route: ActivatedRoute, private facadeService: FacadeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if (!params.id) {
          this.router.navigateByUrl('/');
        }
        if (this.facadeService.getUserDataFromLocalStorage()) {
          this.currentPermissions = this.facadeService.getUserDataFromLocalStorage().permissions;
          this.userData = this.facadeService.getUserDataFromLocalStorage();
        }
        else {
          this.currentPermissions = this.facadeService.getGuestPermissionsFromLocalStorage();
        }
        this.facadeService.getPostById(params.id).subscribe(
          res => {
            this.thisPost = res;
            if (!this.thisPost) {

              this.facadeService.errorGenerated = true;
              this.router.navigateByUrl('/error');
            }
            if (!this.thisPost.postImage) {
              if (this.thisPost.urlToImage)
                this.thisPost.postImage = this.thisPost.urlToImage;
              else
                this.thisPost.postImage = 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg';


            }
            else {
              this.thisPost.postImage = 'http://localhost:3000/' + this.thisPost.postImage;
            }
            this.thisPost.stats = (this.thisPost.content) ? readingtime(this.thisPost.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
            this.facadeService.getCategoryById(this.thisPost.categoryId).subscribe(
              res => {
                this.thisPost.category = res;
                if (!this.thisPost) {
                  this.router.navigateByUrl('/');
                }
                this.thisPost.createdAtParsed = moment(this.thisPost.createdAt).format('MM/DD/YYYY h:mm a');
                this.thisPost.updatedAtParsed = moment(this.thisPost.updatedAt).format('MM/DD/YYYY h:mm a');

                this.facadeService.findLikesByPostId(this.thisPost._id).subscribe(
                  res => {
                    this.thisPost.likes = res;
                    this.thisPost.likesCount = this.thisPost.likes.length;
                    this.facadeService.findDislikesByPostId(this.thisPost._id).subscribe(
                      res => {
                        this.thisPost.dislikes = res;
                        this.thisPost.dislikesCount = this.thisPost.dislikes.length;
                        this.fetchAllComments();
                        this.facadeService.getCategories().subscribe(
                          res => {
                            this.allCategories = res;
                            var requestD = {
                              searchKey: this.thisPost.title
                            }
                            this.facadeService.getRelatedPosts(requestD).subscribe(
                              res => {
                                var allPostsTemp = [];
                                res.body.forEach(element => {
                                  if (element) {
                                    element._source._id = element._id;
                                    allPostsTemp.push(element._source);
                                  }

                                });
                                this.allPosts = allPostsTemp;
                                this.allPosts = this.allPosts;
                                this.allPosts.forEach(post => {
                                  if (!post.postImage) {
                                    if (post.urlToImage)
                                      post.postImage = post.urlToImage;
                                    else
                                      post.postImage = 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg';
                                  }
                                  else {
                                    post.postImage = 'http://localhost:3000/' + post.postImage;
                                  }
                                  post.categoryName = this.allCategories.filter(cat => cat._id === post.categoryId)[0].name;
                                  post.summary = (post.content) ? (post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40)) : 'Fetched from news api';
                                  post.stats = (post.content) ? readingtime(post.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
                                });
                                this.allPostsLoaded = true;
                              }
                            );
                          }
                        );
                      },
                      //error => { 
                        //console.log(error);
                      // }
                    );
                  },
                //  error => { 
                    //console.log(error); 
                //  }
                );
              },
            //  error => {
                ///console.log(error);
           //   }
            )
          },
          error => {
            this.router.navigateByUrl('/');
          }
        );
        this.addCommentForm = new FormGroup({
          content: new FormControl(null, [
            Validators.required,
            Validators.minLength(20)
          ]),
        });
        this.addCommentReplyForm = new FormGroup({
          content: new FormControl(null, [
            Validators.required,
            Validators.minLength(20)
          ]),
        });

      }
    )
  }

  setLikeDislikeButtons() {
    if (this.loginService.userLoggedIn) {
      this.facadeService.findLikeByPostIdAndUserId(this.thisPost._id, this.loginService.getUserDataFromLocalStorage().userId).subscribe(
        res => {
          if (res) {
            this.userLiked = true;
            this.likeDataLoaded = true;
          }
          else {
            this.facadeService.findDislikeByPostIdAndUserId(this.thisPost._id, this.loginService.getUserDataFromLocalStorage().userId)
              .subscribe(
                res => {
                  if (res) {
                    this.userDisliked = true;
                    this.likeDataLoaded = true;
                  }
                  else {
                    this.likeDataLoaded = true;
                  }
                },
              //  error => {
                  // console.log(error); 
             //   }
              )
          }
        },
       // error => { 
          //console.log(error); 
      //  }
      );
    }
  }

  editThis() {
    this.router.navigate(['/edit'], { queryParams: { id: this.thisPost._id } });
  }

  deleteThis() {
    this.facadeService.deletePost(this.thisPost._id).subscribe(
      res => { this.router.navigateByUrl('/'); },
      //error => { 
        //console.log(error); 
      //}
    )
  }

  fetchAllComments() {
    this.facadeService.getCommentsByPostId(this.thisPost._id).subscribe(
      res => {
        this.allComments = res;
        var count = 0;
        var totalCount = this.allComments.length;

        if (this.allComments.length <= 0) {
          this.setLikeDislikeButtons();
          this.allCommentsLoaded = true;
          this.thisPostLoaded = true;
        }
        else {
          this.allComments.forEach(comment => {
            comment.createdAtParsed = moment(comment.createdAt).calendar();
            this.facadeService.getUsernameById(comment.userId).subscribe(
              res => {
                comment.username = res.username;
                count++;
                if (comment.nestedComments.length > 0) {
                  comment.nestedComments.forEach(comm => {
                    this.facadeService.getUsernameById(comm.userId).subscribe(
                      res => {
                        comm.username = res.username;
                        if (count == totalCount) {
                          this.setLikeDislikeButtons();
                          this.allCommentsLoaded = true;
                          this.thisPostLoaded = true;
                        }
                      },
                      error => { //console.log(error); 
                      }
                    )
                  });

                }
                else {
                  if (count == totalCount) {
                    this.setLikeDislikeButtons();
                    this.allCommentsLoaded = true;
                    this.thisPostLoaded = true;
                  }
                }

              },
              error => { 
                //console.log(error); 
              }
            );
          });
        }



      },
      error => { 
       // console.log(error);
       }
    )
  }

  onAddComment() {
    if (this.addCommentForm.value.content.length > 19 && this.loginService.userLoggedIn && this.loginService.getUserDataFromLocalStorage().res) {
      const requestData = {
        content: this.addCommentForm.value.content,
        postId: this.thisPost._id,
        userId: this.loginService.getUserDataFromLocalStorage().userId
      };
      this.facadeService.saveComment(requestData).subscribe(
        res => { this.ngOnInit(); },
      //  error => { 
        //  console.log(error);
       //  }
      )
    }
  }

  onAddCommentReply(commentId) {
    if (this.addCommentReplyForm.value.content.length > 19 && this.loginService.userLoggedIn && this.loginService.getUserDataFromLocalStorage().res) {
      const requestData = {
        content: this.addCommentReplyForm.value.content,
        userId: this.loginService.getUserDataFromLocalStorage().userId
      };
      this.facadeService.saveNestedComment(requestData, commentId).subscribe(
        res => { this.ngOnInit(); },
        error => { 
          //console.log(error); 
        }
      )
    }
  }

  deleteThisComment(commentId) {
    this.facadeService.deleteComment(commentId).subscribe(
      res => { this.ngOnInit(); },
     // error => { 
       // console.log(error);
      // }
    )
  }

  saveLike() {
    var requestData = {
      "postId": this.thisPost._id,
      "userId": this.loginService.getUserDataFromLocalStorage().userId
    }
    this.facadeService.saveLike(requestData).subscribe(
      res => { if (this.userDisliked) this.userDisliked = false; this.userLiked = !this.userLiked; this.ngOnInit(); },
      error => { 
        //console.log(error);
       }
    )
  }

  saveDislike() {
    var requestData = {
      "postId": this.thisPost._id,
      "userId": this.loginService.getUserDataFromLocalStorage().userId
    }
    this.facadeService.saveDislike(requestData).subscribe(
      res => { if (this.userLiked) this.userLiked = false; this.userDisliked = !this.userDisliked; this.ngOnInit(); },
      error => { 
        //console.log(error); 
      }
    )
  }

  navigateToDetails(postId: String) {
    this.router.navigateByUrl('/details/' + postId);
  }


}
