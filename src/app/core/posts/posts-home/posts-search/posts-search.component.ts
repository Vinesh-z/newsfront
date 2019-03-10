import { Router, ActivatedRoute, Params } from '@angular/router';
import { FacadeService } from './../../../services/facade.service';
import { SearchService } from './../../../../shared/search.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as readingtime from "reading-time";

@Component({
  selector: 'app-posts-search',
  templateUrl: './posts-search.component.html',
  styleUrls: ['./posts-search.component.css']
})
export class PostsSearchComponent implements OnInit {

  searchKey;
  allPosts;
  allPostsLoaded: boolean = false;
  allCategories;
  constructor(private router: Router, private route: ActivatedRoute, private searchService: SearchService, private facadeService: FacadeService) { }

  ngOnInit() {
    if (this.searchService.searchKeySet) {
      this.searchService.searchKeySet = false;
      this.ngOnInit();
    }
    if (this.searchService.searchKey != '') {
      this.searchKey = this.searchService.searchKey;
      var requestData = {
        searchKey: this.searchKey
      }
      this.facadeService.getCategories().subscribe(
        res => {
          this.allCategories = res;
          this.facadeService.searchPosts(requestData).subscribe(
            res => {
              var allPostsTemp = [];
              res.body.forEach(element => {
                element._source._id = element._id;
                allPostsTemp.push(element._source);
              });
              this.allPosts = allPostsTemp;
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
                if(post.categoryId) {
                  post.categoryName = this.allCategories.filter(cat => cat._id === post.categoryId)[0].name;

                }
                else {

                }
                post.stats = (post.content) ? readingtime(post.content.replace(/<\/?[^>]+(>|$)/g, "")) : {'text': ''};
              });
              this.allPostsLoaded = true;
              this.searchService.searchKey = '';
            }
          );
        }
      );

    }
    else {
      this.router.navigate(['/']);
    }

  }

  navigateToDetails(postId: String) {
    this.router.navigateByUrl('/details/'+postId);
  }

}
