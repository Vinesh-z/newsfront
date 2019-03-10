import { LoaderComponent } from './../../shared/loader/loader/loader.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesHomeComponent } from './categories-home/categories-home.component';
import { CategoriesViewComponent } from './categories-home/categories-view/categories-view.component';
import { CategoriesAddComponent } from './categories-home/categories-add/categories-add.component';
import { CategoriesEditComponent } from './categories-home/categories-edit/categories-edit.component';

@NgModule({
  declarations: [ CategoriesHomeComponent, CategoriesViewComponent, CategoriesAddComponent, CategoriesEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriesRoutingModule,
    AngularFontAwesomeModule
  ]
})
export class CategoriesModule { }
