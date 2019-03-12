import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import * as $ from "jquery";
import * as readingtime from "reading-time";

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  selectedCategory: string;
  allCategories;
  forShowing;
  pageOne: boolean = true;
  allCategoriesLoaded: boolean = false;
  allPosts;
  allPostsForShowing;
  currentPermissions;
  postCount;
  totalPages;
  pageArray = [];
  currentStart = 1;
  pageNumbLimit = 8;
  allPostsLoaded: boolean = false;
  categorySelected = 'all';
  paginationLoaded: boolean = false;
  first;
  trendingArray;
  trendingArrayLoaded: boolean = false;
  firstLimit;
  secondLimit;
  constructor(private router: Router, private route: ActivatedRoute, private facadeService: FacadeService) { }

  ngOnInit() {

    if (this.facadeService.getUserDataFromLocalStorage()) {
      this.currentPermissions = this.facadeService.getUserDataFromLocalStorage().permissions;
    }
    else {
      this.currentPermissions = this.facadeService.getGuestPermissionsFromLocalStorage();
    }

    this.route.queryParams.subscribe(
      params => {
        if (params.categoryId && params.first && params.second) {
          this.first = params.first;

          this.facadeService.getCategories().subscribe(
            res => {
              this.allCategories = res;
              this.allCategoriesLoaded = true;
              this.facadeService.getCountOfPosts().subscribe(
                res => {

                  this.selectedCategory = 'all';
                  this.postCount = res.count;
                  this.totalPages = ((this.postCount % 9) == 0) ? (this.postCount / 9) : ((this.postCount / 9) + 1);
                  this.pageArray = [];
                  for (var i = 1; i <= Number(this.totalPages); i++) {
                    this.pageArray.push(i);
                  }
                  if (this.pageArray.length > 5) {
                    this.forShowing = 5;
                    if (this.first > (this.pageArray.length - 2)) {
                      this.firstLimit = this.first - 5;
                      if(this.firstLimit<0){
                        this.firstLimit = 0;
                      }
                    }
                    else {
                      this.firstLimit = this.first - 3;
                      if(this.firstLimit<0){
                        this.firstLimit = 0;
                      }
                      if (this.first - 3 >= 0) {
                        this.firstLimit = this.first - 3;
                        if(this.firstLimit<0){
                          this.firstLimit = 0;
                        }
                        this.pageOne = false;
                      }
                      else {
                      }
                    }
                  }
                  else {
                    this.forShowing = this.pageArray.length;

                  }
                  this.facadeService.getPosts(0, 9).subscribe(
                    res => {
                      this.allPosts = res;
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
                        post.title = post.title.substring(0, 50) + '...';
                        post.summary = (post.content) ? (post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40)) : 'Fetched from news api';
                        post.stats = (post.content) ? readingtime(post.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
                      });
                      this.allPostsForShowing = this.allPosts;

                      this.selectedCategory = params.categoryId;

                      this.filterByCategory(params.categoryId, params.first, params.second);
                    },
                    //error => {
                    //  console.log(error);
                    //}
                  )
                },
               // error => { }
              );

            },
           // error => {
          //    console.log(error);
           // }
          );
        }
        else {
          this.first = 1;
          this.facadeService.getCategories().subscribe(
            res => {
              this.allCategories = res;
              this.allCategoriesLoaded = true;
              this.facadeService.getTopPosts().subscribe(
                res => {
                  this.trendingArray = res;
                  var count = 0;
                  this.trendingArray.forEach(post => {
                    count++;
                    post.categoryName = this.allCategories.filter(cat => cat._id === post.categoryId)[0].name;
                    if (!post.postImage) {
                      if (post.urlToImage)
                        post.postImage = post.urlToImage;
                      else
                        post.postImage = 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg';
                    }
                    else {
                      post.postImage = 'http://localhost:3000/' + post.postImage;
                    }
                    var type = (count == 1) ? 'main' : 'others';
                    var requestData = {
                      type: type,
                      postImage: post.postImage
                    }
                    this.trendingArrayLoaded = true;
                    /*
                    this.facadeService.getTopPostsImages(requestData).subscribe(
                      imgRes => {
                        console.log(imgRes);
                        post.postImage = imgRes.body.img;
                        console.log('count = ' + count);
                        if (count == this.trendingArray.length) {
                          
                        }
                      },
                      err => { console.log(err); }
                    ); */
                  });

                },
              //  error => { 
                 // console.log(error);
              //   }
              );
              this.facadeService.getCountOfPosts().subscribe(
                res => {

                  this.selectedCategory = 'all';
                  this.postCount = res.count;
                  this.totalPages = ((this.postCount % 9) == 0) ? (this.postCount / 9) : ((this.postCount / 9) + 1);
                  this.pageArray = [];
                  for (var i = 1; i <= Number(this.totalPages); i++) {
                    this.pageArray.push(i);
                  }
                  if (this.pageArray.length > 5) {
                    this.forShowing = 5;
                    if (this.first > (this.pageArray.length - 2)) {
                      this.firstLimit = this.first - 5;
                      if(this.firstLimit<0){
                        this.firstLimit = 0;
                      }
                    }
                    else {
                      this.firstLimit = this.first - 3;
                      if(this.firstLimit<0){
                        this.firstLimit = 0;
                      }
                      if (this.first - 3 >= 0) {
                        this.firstLimit = this.first - 3;
                        if(this.firstLimit<0){
                          this.firstLimit = 0;
                        }
                        this.pageOne = false;
                      }
                      else {
                      }
                    }
                  }
                  else {
                    this.forShowing = this.pageArray.length;
                  }
                  this.facadeService.getPosts(0, 9).subscribe(
                    res => {

                      this.allPosts = res;
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
                        post.title = post.title.substring(0, 50) + '...';
                        post.categoryName = this.allCategories.filter(cat => cat._id === post.categoryId)[0].name;
                        post.summary = (post.content) ? (post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40)) : 'Fetched from news api';
                        post.stats = (post.content) ? readingtime(post.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
                      });
                      this.allPostsForShowing = this.allPosts;
                      this.allPostsLoaded = true;
                      this.paginationLoaded = true;
                    },
                //    error => {
                     // console.log(error);
                  //  }
                  )
                },
              //  error => { }
              );

            },
           // error => {
              //console.log(error);
          //  }
          );
        }
      });
  }

  filterPage(categoryId, first, second) {
    this.router.navigate(['/'], { queryParams: { categoryId: categoryId, first: first, second: second } });
  }

  filterPageNext(categoryId, first, step, second) {
    this.router.navigate(['/'], { queryParams: { categoryId: categoryId, first: Number(first) + Number(step), second: second } });
  }

  filterByCategory(categoryId, first, second) {
    first = (first - 1) * 9;
    if (categoryId === 'all') {
      
      //this.router.navigateByUrl('/');
      this.selectedCategory = 'all';
      this.paginationLoaded = false;
      this.facadeService.getCountOfPosts().subscribe(
        res => {
          this.postCount = res.count;
          this.totalPages = ((this.postCount % 9) == 0) ? (this.postCount / 9) : ((this.postCount / 9) + 1);
          this.pageArray = [];
          for (var i = 1; i <= Number(this.totalPages); i++) {
            this.pageArray.push(i);
          }
          if (this.pageArray.length > 5) {
            this.forShowing = 5;
            if (this.first > (this.pageArray.length - 2)) {
              this.firstLimit = this.first - 5;
              if(this.firstLimit<0){
                this.firstLimit = 0;
              }
            }
            else {
              this.firstLimit = this.first - 3;
              if(this.firstLimit<0){
                this.firstLimit = 0;
              }
              if (this.first - 3 >= 0) {
                this.firstLimit = this.first - 3;
                if(this.firstLimit<0){
                  this.firstLimit = 0;
                }
                this.pageOne = false;
              }
              else {
              }
            }
          }
          else {
            this.forShowing = this.pageArray.length;
          }

          this.facadeService.getPosts(first, second).subscribe(
            res => {

              this.allPosts = res;
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
                post.title = post.title.substring(0, 50) + '...';
                post.categoryName = this.allCategories.filter(cat => cat._id === post.categoryId)[0].name;
                post.summary = (post.content) ? (post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40)) : 'Fetched from news api';
                post.stats = (post.content) ? readingtime(post.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
       
              });
              this.allPostsForShowing = this.allPosts;
              this.allPostsLoaded = true;
              this.paginationLoaded = true;
            }
          );
        },
       // error => { }
      );

    }
    else {
      this.paginationLoaded = false;
      this.facadeService.getCountOfPostsByCategoryId(categoryId).subscribe(
        res => {
          this.postCount = res.count;
          this.totalPages = ((this.postCount % 9) == 0) ? (this.postCount / 9) : ((this.postCount / 9) + 1);
          this.pageArray = [];
          for (var i = 1; i <= Number(this.totalPages); i++) {
            this.pageArray.push(i);
          }
          if (this.pageArray.length > 5) {
            this.forShowing = 5;
            if (this.first > (this.pageArray.length - 2)) {
              this.firstLimit = this.first - 5;
              if(this.firstLimit<0){
                this.firstLimit = 0;
              }
            }
            else {
              this.firstLimit = this.first - 3;
              if(this.firstLimit<0){
                this.firstLimit = 0;
              }
              if (this.first - 3 >= 0) {
                this.firstLimit = this.first - 3;
                if(this.firstLimit<0){
                  this.firstLimit = 0;
                }
                this.pageOne = false;
              }
              else {
              }
            }
          }
          else {
            this.forShowing = this.pageArray.length;
          }
          this.facadeService.getPostsByCategoryId(categoryId, first, second).subscribe(
            res => {
              this.allPosts = res;
              this.allPosts.forEach(post => {
                if (!post.postImage) {
                  if (!post.urlToImage) {
                    post.postImage = 'https://dw9to29mmj727.cloudfront.net/promo/2016/5868-SeriesHeaders_PromisedNeverland_2000x800.jpg';
                  }
                  else {
                    post.postImage = post.urlToImage;
                  }
                }
                else {
                  post.postImage = 'http://localhost:3000/' + post.postImage;
                }
                post.title = post.title.substring(0, 50) + '...';
                post.categoryName = this.allCategories.filter(cat => cat._id === post.categoryId)[0].name;
                post.summary = (post.content) ? (post.content.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 40)) : 'Fetched from news api';
                post.stats = (post.content) ? readingtime(post.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
              });
              this.allPostsForShowing = this.allPosts;
              this.allPostsLoaded = true;
              this.paginationLoaded = true;
            }
          )
        },
      //  error => { }
      );

      // this.allPostsForShowing = this.allPosts.filter(post => post.categoryId===categoryId);
    }
  }


  public onChange(event): void {
    this.selectedCategory = event.target.value;
    this.filterPage(event.target.value, 1, 9);
    //this.filterByCategory(event.target.value, 1, 9);
  }



}
