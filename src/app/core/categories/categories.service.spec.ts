import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { environment } from 'src/environments/environment';
import { CategoriesService } from './categories.service';
import { of } from 'rxjs';

var cat =
{
  "_id": "5c7d5fde213e25232864dbe0",
  "name": "Politics",
  "updatedAt": "2019-03-04T17:26:54.262Z",
  "createdAt": "2019-03-04T17:26:54.262Z",
  "__v": 0
}
var allCategories = [
  cat
];
describe('CategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  fit('should be created', () => {
    const service: CategoriesService = TestBed.get(CategoriesService);
    service.BASE_URL = 'http://localhost:3000';
    expect(service).toBeTruthy();
    expect(service.BASE_URL).toBe(environment.BASE_URL);
  });

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, CategoriesService],
      (httpMock: HttpTestingController, service: CategoriesService) => {
        service.getCategories().subscribe(data => {
          expect(data).toEqual(allCategories);
        });
        const req = httpMock.expectOne('http://localhost:3000/categories');
        expect(req.request.method).toEqual('GET');
        req.flush(allCategories);
      })
  );
  fit('expects service to fetch data with proper sorting2',
    inject([HttpTestingController, CategoriesService],
      (httpMock: HttpTestingController, service: CategoriesService) => {
        service.getCategoryById('5c7d5fde213e25232864dbe0').subscribe(data => {
          expect(data).toBe(allCategories[0]);
        });
        const req = httpMock.expectOne('http://localhost:3000/categories/5c7d5fde213e25232864dbe0');
        expect(req.request.method).toEqual('GET');
        req.flush(allCategories[0]);
      })
  );

  fit('saves a category',
    inject([HttpTestingController, CategoriesService],
      (httpMock: HttpTestingController, service: CategoriesService) => {
        service.saveCategory(cat).subscribe(data => {
          expect(data.body).toBe(cat);
        });
        const req = httpMock.expectOne('http://localhost:3000/categories/new');
        expect(req.request.method).toEqual('POST');
        req.flush(cat);
      })
  );

  fit('updates a category',
  inject([HttpTestingController, CategoriesService],
    (httpMock: HttpTestingController, service: CategoriesService) => {
      service.updateCategory(cat._id, cat).subscribe(data => {
        expect(data).toBe(cat);
      });
      const req = httpMock.expectOne('http://localhost:3000/categories/'+cat._id+'/update');
      expect(req.request.method).toEqual('PUT');
      req.flush(cat);
    })
);


});
