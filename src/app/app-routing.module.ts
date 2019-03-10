import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './core/posts/posts.module#PostsModule'
  },
  {
    path: 'profile',
    loadChildren: './core/userprofile/userprofile.module#UserprofileModule'
  },
  {
    path: 'categories',
    loadChildren: './core/categories/categories.module#CategoriesModule'
  },
  {
    path: 'register',
    loadChildren: './core/registration/registration.module#RegistrationModule'
  },
  {
    path: 'login',
    loadChildren: './core/login/login.module#LoginModule'
  },
  {
    path: 'error',
    loadChildren: './core/errors/session-ended/session-ended.module#SessionEndedModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
