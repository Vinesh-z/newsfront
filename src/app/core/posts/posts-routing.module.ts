import { PostsLikeComponent } from './posts-home/posts-like/posts-like.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsHomeComponent } from './posts-home/posts-home.component';
import { PostsViewComponent } from './posts-home/posts-view/posts-view.component';
import { PostsAddComponent } from './posts-home/posts-add/posts-add.component';
import { PostsDetailsComponent } from './posts-home/posts-details/posts-details.component';
import { PostsEditComponent } from './posts-home/posts-edit/posts-edit.component';
import { PostGuardService } from './post-guard.service';
import { PostsSearchComponent } from './posts-home/posts-search/posts-search.component';

const routes: Routes = [
  {
    path: '',
    component:  PostsHomeComponent,
    children: [
      { path: '', redirectTo: 'view' },
      {
        path: 'view',
        component: PostsViewComponent
      },
      {
        path: 'add',
        component: PostsAddComponent,
        canActivate: [PostGuardService]
      },
      {
        path: 'edit',
        component: PostsEditComponent,
        canActivate: [PostGuardService]
      },
      {
        path: 'details/:id',
        component: PostsDetailsComponent
      },
      {
        path: 'search',
        component: PostsSearchComponent
      },
      {
        path: 'liked',
        component: PostsLikeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
