import { CategoryGuardService } from './../categories/category-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { CategoriesViewComponent } from './categories-home/categories-view/categories-view.component';
import { CategoriesAddComponent } from './categories-home/categories-add/categories-add.component';
import { CategoriesEditComponent } from './categories-home/categories-edit/categories-edit.component';

const routes: Routes = [
  {
    path: '',
    component:  CategoriesHomeComponent,
    children: [
      { path: '', redirectTo: 'view' },
      {
        path: 'view',
        component: CategoriesViewComponent
      },
      {
        path: 'add',
        component: CategoriesAddComponent,
        canActivate: [CategoryGuardService]
      },
      {
        path: 'edit',
        component: CategoriesEditComponent,
        canActivate: [CategoryGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
