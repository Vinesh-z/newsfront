import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css']
})
export class CategoriesAddComponent implements OnInit {

  addCategoryForm: FormGroup;
  wrongDetails = false;
  constructor(private location: Location, private router: Router, private facadeService: FacadeService) { }

  ngOnInit() {
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
      this.facadeService.saveCategory(requestData).subscribe(
        res => { this.router.navigateByUrl('/categories'); },
        error => { this.wrongDetails = true; }
      )
    }
  }

  goBack() {
    this.location.back();
  }


}
