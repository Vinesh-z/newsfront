import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_HEADERS } from 'src/app/utilities/header.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  
  BASE_URL = environment.BASE_URL;
  constructor(private httpClient: HttpClient) {}

  getPosts(first, second): Observable<any> {
    return this.httpClient.get(this.BASE_URL + '/posts' + '/' + first + '/' + second);
  }

  getTopPosts(): Observable<any> {
    return this.httpClient.get(this.BASE_URL + '/posts/top');
  }

  getTopPostsImages(data): Observable<any> {
    return this.httpClient.post(this.BASE_URL + '/posts/img', data, POST_HEADERS);
  }
  

  searchPosts(data): Observable<any> {
    return this.httpClient.post(this.BASE_URL + '/posts/new/search', data, POST_HEADERS);
  }

  getRelatedPosts(data): Observable<any> {
    return this.httpClient.post(this.BASE_URL + '/posts/related', data, POST_HEADERS);
  }

  /*searchPostsElastic(data) {
    return this.httpClient.post(this.BASE_URL + '/posts/new/search', data, POST_HEADERS);
  }*/


  getCountOfPosts(): Observable<any>{
    return this.httpClient.get(this.BASE_URL + '/posts/count');
  }

  getCountOfPostsByCategoryId(categoryId): Observable<any>{
    return this.httpClient.get(this.BASE_URL + '/posts/count/category/' + categoryId);
  }

  getPostById(id) {
    return this.httpClient.get(this.BASE_URL + '/posts/' + id);
  }

  getPostsByCategoryId(categoryId, first, second) {
    return this.httpClient.get(this.BASE_URL + '/posts/category/' + categoryId+ '/' + first + '/' + second);
  }

  savePost(data) {
    return this.httpClient.post(this.BASE_URL + '/posts/new', data, POST_HEADERS);
  }

  saveImage(uploadData: FormData, postId): Observable<any> {
    return this.httpClient.post(this.BASE_URL + '/posts/image/'+postId, uploadData, {
      reportProgress: true,
      observe: 'events',
      responseType: 'json' as 'json'
    });
  }

  updatePost(id, data) {
    return this.httpClient.put(this.BASE_URL + '/posts/update/'+id, data);
  }

  deletePost(id) {
    return this.httpClient.delete(this.BASE_URL + '/posts/delete/'+id);
  }

  findLikesByPostId(postId) {
    return this.httpClient.get(this.BASE_URL + '/reactions/likes/post/' + postId);
  }

  findLikesByUserId(userId) {
    return this.httpClient.get(this.BASE_URL + '/reactions/likes/post/user/' + userId);
  }

  findDislikesByUserId(userId) {
    return this.httpClient.get(this.BASE_URL + '/reactions/dislikes/post/user/' + userId);
  }

  findDislikesByPostId(postId) {
    return this.httpClient.get(this.BASE_URL + '/reactions/dislikes/post/' + postId);
  }

  findLikeByPostIdAndUserId(postId, userId) {
    return this.httpClient.get(this.BASE_URL + '/reactions/likes/post/' + postId + '/user/' + userId);
  }

  findDislikeByPostIdAndUserId(postId, userId) {
    return this.httpClient.get(this.BASE_URL + '/reactions/dislikes/post/' + postId + '/user/' + userId);
  }

  saveLike(like) {
    return this.httpClient.post(this.BASE_URL + '/reactions/likes/new', like, POST_HEADERS);
  }

  saveDislike(dislike) {
    return this.httpClient.post(this.BASE_URL + '/reactions/dislikes/new', dislike, POST_HEADERS);
  }

}
