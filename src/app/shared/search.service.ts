import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchKey = '';
  searchKeySet: boolean = false;
  constructor() { }
}
