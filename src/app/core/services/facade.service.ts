import { UserService } from './../user/user.service';
import { CommentsService } from './../comments/comments.service';
import { PostsService } from './../posts/posts.service';
import { CategoriesService } from './../categories/categories.service';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { RegistrationService } from '../registration/registration.service';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})

export class FacadeService {
  constructor(private injector: Injector) { }

  private _categoriesService: CategoriesService;
  public get categoriesService(): CategoriesService {
    if (!this._categoriesService) {
      this._categoriesService = this.injector.get(CategoriesService);
    }
    return this._categoriesService
  }

  private _postsService: PostsService;
  public get postsService(): PostsService {
    if (!this._postsService) {
      this._postsService = this.injector.get(PostsService);
    }
    return this._postsService
  }

  private _commentsService: CommentsService;
  public get commentsService(): CommentsService {
    if (!this._commentsService) {
      this._commentsService = this.injector.get(CommentsService);
    }
    return this._commentsService
  }

  private _registrationService: RegistrationService;
  public get registrationService(): RegistrationService {
    if (!this._registrationService) {
      this._registrationService = this.injector.get(RegistrationService);
    }
    return this._registrationService
  }

  private _loginService: LoginService;
  public get loginService(): LoginService {
    if (!this._loginService) {
      this._loginService = this.injector.get(LoginService);
    }
    return this._loginService
  }

  private _userService: UserService;
  public get userService(): UserService {
    if (!this._userService) {
      this._userService = this.injector.get(UserService);
    }
    return this._userService
  }

  errorGenerated: boolean = false;

  getCategories(): Observable<any> {
    return this.categoriesService.getCategories();
  }

  getCategoryById(id) {
    return this.categoriesService.getCategoryById(id);
  }

  saveCategory(data) {
    return this.categoriesService.saveCategory(data);
  }

  updateCategory(id, data) {
    return this.categoriesService.updateCategory(id, data);
  }

  getPosts(first, second): Observable<any> {
    return this.postsService.getPosts(first, second);
  }

  getTopPosts(): Observable<any> {
    return this.postsService.getTopPosts();
  }

  getTopPostsImages(data): Observable<any> {
    return this.postsService.getTopPostsImages(data);
  }

  getCountOfPosts(): Observable<any> {
    return this.postsService.getCountOfPosts();
  }

  getPostById(id) {
    return this.postsService.getPostById(id);
  }

  getPostsByCategoryId(categoryId, first, second): Observable<any> {
    return this.postsService.getPostsByCategoryId(categoryId, first, second);
  }

  getCountOfPostsByCategoryId(categoryId): Observable<any> {
    return this.postsService.getCountOfPostsByCategoryId(categoryId);
  }

  searchPosts(data): Observable<any> {
    return this.postsService.searchPosts(data);
  }

  getRelatedPosts(data): Observable<any> {
    return this.postsService.getRelatedPosts(data);
  }

  savePost(data): Observable<any> {
    return this.postsService.savePost(data);
  }

  saveImage(uploadData, postId): Observable<any> {
    return this.postsService.saveImage(uploadData, postId);
  }

  updatePost(id, data) {
    return this.postsService.updatePost(id, data);
  }

  deletePost(id) {
    return this.postsService.deletePost(id);
  }

  findLikesByPostId(postId) {
    return this.postsService.findLikesByPostId(postId);
  }

  findDislikesByPostId(postId) {
    return this.postsService.findDislikesByPostId(postId);
  }

  findLikesByUserId(userId): Observable<any> {
    return this.postsService.findLikesByUserId(userId);
  }

  findDislikesByUserId(userId): Observable<any> {
    return this.postsService.findDislikesByUserId(userId);
  }

  findLikeByPostIdAndUserId(postId, userId) {
    return this.postsService.findLikeByPostIdAndUserId(postId, userId);
  }

  findDislikeByPostIdAndUserId(postId, userId) {
    return this.postsService.findDislikeByPostIdAndUserId(postId, userId);
  }

  saveLike(like) {
    return this.postsService.saveLike(like);
  }

  saveDislike(dislike) {
    return this.postsService.saveDislike(dislike);
  }

  getCommentsByPostId(postId) {
    return this.commentsService.getCommentsByPostId(postId);
  }

  getCommentsByUserId(userId) {
    return this.commentsService.getCommentsByUserId(userId);
  }

  saveComment(data) {
    return this.commentsService.saveComment(data);
  }

  saveNestedComment(comment, commentId) {
    return this.commentsService.saveNestedComment(comment, commentId);
  }

  deleteComment(commentId) {
    return this.commentsService.deleteComment(commentId);
  }

  registerUser(data) {
    return this.registrationService.registerUser(data);
  }

  updateUser(data) {
    return this.registrationService.updateUser(data);
  }

  registerAdminUser(data) {
    return this.registrationService.registerAdminUser(data);
  }

  loginUser(data): Observable<any> {
    return this.loginService.loginUser(data);
  }

  logoutUser() {
    return this.loginService.logoutUser();
  }

  setUserDataInLocalStorage(res) {
    this.loginService.setUserDataInLocalStorage(res);
  }

  getUserDataFromLocalStorage() {
    return this.loginService.getUserDataFromLocalStorage();
  }

  setUserPermissionsInLocalStorage(res) {
    this.loginService.setUserPermissionsInLocalStorage(res);
  }

  getUserPermissionsFromLocalStorage() {
    return this.loginService.getUserPermissionsFromLocalStorage();
  }

  fetchGuestPermissions() {
    return this.loginService.fetchGuestPermissions();
  }

  setGuestPermissions(permission) {
    this.loginService.setGuestPermissions(permission);
  }

  resetGuestPermissions() {
    this.loginService.resetGuestPermissions();
  }

  getUsernameById(id): any {
    return this.userService.getUsernameById(id);
  }

  getGuestPermissionsFromLocalStorage() {
    return this.loginService.getGuestPermissionsFromLocalStorage();
  }

  getGroups() {
    return this.registrationService.getGroups();
  }

  saveGroup(data){
    return this.registrationService.saveGroup(data);
  }

}

