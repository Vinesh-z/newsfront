import { IMAGE_HEADERS } from './../../../../utilities/header.config';
import { FacadeService } from './../../../services/facade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

  constructor(private router: Router, private facadeService: FacadeService) { }

  allCategoriesLoaded: boolean = false;
  allCategories = [];
  currentPermissions;

  ngOnInit() {
    if(this.facadeService.getUserDataFromLocalStorage()) {
      this.currentPermissions = this.facadeService.getUserDataFromLocalStorage().permissions;
    }
    else {
      this.currentPermissions = this.facadeService.getGuestPermissionsFromLocalStorage();
    }

    this.facadeService.getCategories().subscribe(
      res => {
        this.allCategories = res;
        this.allCategoriesLoaded = true;
      },
      error => { 
        this.router.navigateByUrl('/');
      }
    )
  }

  editThis(id) {
    this.router.navigate(['/categories/edit'], { queryParams: { id: id } });
  }

}
