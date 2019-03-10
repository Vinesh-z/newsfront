import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_HEADERS } from 'src/app/utilities/header.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService  {
  
  BASE_URL = environment.BASE_URL;
  constructor(private httpClient: HttpClient) {}


  getCommentsByPostId(postId) {
    return this.httpClient.get(this.BASE_URL + '/comments/post/' + postId);
  }

  getCommentsByUserId(userId) {
    return this.httpClient.get(this.BASE_URL + '/comments/usercomment/' + userId);
  }

  saveComment(data) {
    return this.httpClient.post(this.BASE_URL + '/comments/new', data, POST_HEADERS);
  }

  saveNestedComment(comment, commentId) {
    return this.httpClient.post(this.BASE_URL + '/comments/new/' + commentId, comment, POST_HEADERS);
  }

  deleteComment(commentId) {
    return this.httpClient.delete(this.BASE_URL + '/comments/delete/' + commentId);
  }

}
