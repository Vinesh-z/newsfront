import { Location } from '@angular/common';
import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {
  addCategoryForm: FormGroup;

  wrongDetails = false;
  thisCategory;
  thisCategoryLoaded: boolean = false;
  thisCategoryId;
  constructor(private location: Location, private router: Router, private route: ActivatedRoute, private facadeService: FacadeService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.thisCategoryId = params.id;
        if(!this.thisCategoryId)
          this.router.navigateByUrl('/categories');
        this.facadeService.getCategoryById(this.thisCategoryId).subscribe(
          res => {
            this.thisCategory = res;
            this.thisCategoryLoaded = true;
          },
          error => {
            this.router.navigateByUrl('/categories');
          }
        )
      }
    )
    this.addCategoryForm = new FormGroup({
      categoryName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }

  onAddCategory() {
    if (this.addCategoryForm.value.categoryName.length > 1) {
      if(this.wrongDetails) {
        this.wrongDetails = false;
      }
      const requestData = {
        name: this.addCategoryForm.value.categoryName,
      };
      this.facadeService.updateCategory(this.thisCategory._id, requestData).subscribe(
        res => { this.router.navigateByUrl('/categories'); },
        error => { this.wrongDetails = true; }
      )
    }

  }

  goBack() {
    this.location.back();
  }


}
