import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoaderComponent } from './../../shared/loader/loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsViewComponent } from './posts-home/posts-view/posts-view.component';
import { PostsAddComponent } from './posts-home/posts-add/posts-add.component';
import { PostsEditComponent } from './posts-home/posts-edit/posts-edit.component';
import { PostsDetailsComponent } from './posts-home/posts-details/posts-details.component';
import { PostsSearchComponent } from './posts-home/posts-search/posts-search.component';
import { PostsLikeComponent } from './posts-home/posts-like/posts-like.component';
import { PostsCreatedComponent } from './posts-home/posts-created/posts-created.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@NgModule({
  declarations: [
    LoaderComponent, PostsHomeComponent, PostsViewComponent, PostsAddComponent, PostsEditComponent, PostsDetailsComponent, PostsSearchComponent, PostsLikeComponent, PostsCreatedComponent, DialogComponent],
  imports: [
    CommonModule,
    FroalaEditorModule,
    FroalaViewModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ]
})
export class PostsModule { }
