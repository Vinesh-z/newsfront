import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { POST_HEADERS } from 'src/app/utilities/header.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  
  BASE_URL = environment.BASE_URL;
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get(this.BASE_URL + '/categories');
  }

  getCategoryById(id) {
    return this.httpClient.get(this.BASE_URL + '/categories/' + id);
  }

  saveCategory(data) {
    return this.httpClient.post(this.BASE_URL + '/categories/new', data, POST_HEADERS);
  }

  updateCategory(id, data) {
    return this.httpClient.put(this.BASE_URL + '/categories/'+id+'/update', data);
  }

}
