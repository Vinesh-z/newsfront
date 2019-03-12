import { FacadeService } from './../../../services/facade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
  thisPost;
  errorData;
  thisPostLoaded: boolean = false;
  alreadyUpdated: boolean = false;
  addPostForm: FormGroup;
  allCategories;
  detailsCorrectlyFilled: boolean = true;
  allCategoriesLoaded: boolean = false;
  thisCategory;
  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private facadeService: FacadeService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {
        if (!params.id) {
          this.router.navigateByUrl('/');
        }

        this.facadeService.getPostById(params.id).subscribe(
          res => {
            this.thisPost = res;
            this.thisPostLoaded = true;
            this.facadeService.getCategories().subscribe(
              res => {
                res.forEach(element => {
                  if (element._id === this.thisPost.categoryId) {
                    this.thisCategory = element;
                  }
                });

                this.allCategories = res.filter(obj => obj._id != this.thisPost.categoryId);

                this.addPostForm = new FormGroup({
                  postCategory: new FormControl(this.thisCategory._id),
                  location: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                  ]),
                  postTitle: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(100),
                  ]),
                  postContent: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(20)
                  ]),
                });
                this.addPostForm.patchValue({
                  postTitle: this.thisPost.title,
                  postContent: this.thisPost.content,
                  location: this.thisPost.location
                });
                this.allCategoriesLoaded = true;
              },
              error => { 
                this.router.navigateByUrl('/');
              }
            )
          },
          error => { 
            this.router.navigateByUrl('/');
          }
        )
      }
    )


  }

  onAddPost() {
    if (this.addPostForm.value.postTitle.length > 1 && this.addPostForm.value.postContent.length > 19 && this.addPostForm.value.postCategory.length > 0) {
      const requestData = {
        title: this.addPostForm.value.postTitle,
        content: this.addPostForm.value.postContent,
        categoryId: this.addPostForm.value.postCategory,
        location: this.addPostForm.value.location,
        '__v': this.thisPost.__v
      };
      this.facadeService.updatePost(this.thisPost._id, requestData).subscribe(
        res => { this.router.navigateByUrl('/'); },
        error => {
          if (error.error.res.includes("Post already updated")) {
            this.alreadyUpdated = true;
            this.errorData = error.error.res;
          }
        }
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
