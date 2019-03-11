import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentsService } from './comments.service';

var comm = {
  "_id": 'someId',
  "nestedComments": [
    {
      "nestedComments": [],
      "_id": "5c59834567027847c489d91b",
      "content": "haahahaahaahahaahahahahahah",
      "userId": "5c5729804cc4fa425c8e7b10"
    },
    {
      "nestedComments": [],
      "_id": "5c59b0ad14b03d26f4f3b510",
      "content": "hahaha hahahahahahahaha",
      "userId": "5c59af2d31c81d29e8e945e6"
    }
  ],
  "content": "haahahaah hahahaaha 123",
  "postId": "5c4887cf6e9e9355107bd237",
  "userId": "5c5729804cc4fa425c8e7b10",
  "__v": 2
}
var nestedComment = {
  "nestedComments": [],
  "_id": "5c59b0ad14b03d26f4f3b510",
  "content": "hahaha hahahahahahahaha",
  "userId": "5c59af2d31c81d29e8e945e6"
}

var comments = [
  comm
]
describe('CommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  fit('should be created', () => {
    const service: CommentsService = TestBed.get(CommentsService);
    expect(service).toBeTruthy();
    expect(service.BASE_URL).toBe(environment.BASE_URL);
  });

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, CommentsService],
      (httpMock: HttpTestingController, service: CommentsService) => {
        service.getCommentsByPostId('5c4887cf6e9e9355107bd237').subscribe(data => {
          expect(data).toEqual(comments);
        });
        const req = httpMock.expectOne('http://localhost:3000/comments/post/5c4887cf6e9e9355107bd237');
        expect(req.request.method).toEqual('GET');
        req.flush(comments);
      })
  );

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, CommentsService],
      (httpMock: HttpTestingController, service: CommentsService) => {
        service.getCommentsByUserId('5c5729804cc4fa425c8e7b10').subscribe(data => {
          expect(data).toEqual(comments);
        });
        const req = httpMock.expectOne('http://localhost:3000/comments/usercomment/5c5729804cc4fa425c8e7b10');
        expect(req.request.method).toEqual('GET');
        req.flush(comments);
      })
  );

  fit('saves a comment',
    inject([HttpTestingController, CommentsService],
      (httpMock: HttpTestingController, service: CommentsService) => {
        service.saveComment(comm).subscribe(data => {
          expect(data.body).toEqual(comments[0]);
        });
        const req = httpMock.expectOne('http://localhost:3000/comments/new');
        expect(req.request.method).toEqual('POST');
        req.flush(comments[0]);
      })
  );

  fit('delete a comment',
    inject([HttpTestingController, CommentsService],
      (httpMock: HttpTestingController, service: CommentsService) => {
        service.deleteComment(comm._id).subscribe(data => {
          expect(data).toEqual(comm);
        });
        const req = httpMock.expectOne('http://localhost:3000/comments/delete/' + comm._id);
        expect(req.request.method).toEqual('DELETE');
        req.flush(comm);
      })
  );

  fit('saves a nested comment',
    inject([HttpTestingController, CommentsService],
      (httpMock: HttpTestingController, service: CommentsService) => {
        service.saveNestedComment(nestedComment, comm._id).subscribe(data => {
          expect(data.body).toEqual(comm);
        });
        const req = httpMock.expectOne('http://localhost:3000/comments/new/' + comm._id);
        expect(req.request.method).toEqual('POST');
        req.flush(comm);
      })
  );

});
