import { FroalaEditorModule, FroalaViewModule, FroalaEditorDirective } from 'angular-froala-wysiwyg';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { FacadeService } from './../../../services/facade.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { PostsAddComponent } from './posts-add.component';
import { LoginService } from 'src/app/core/login/login.service';
import * as $ from 'jquery';

var allCats = [
  {
    "_id": "5c7d5fde213e25232864dbe0",
    "name": "Politics",
    "updatedAt": "2019-03-04T17:26:54.262Z",
    "createdAt": "2019-03-04T17:26:54.262Z",
    "__v": 0
  }
]

var post = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "content": "<p>nationwide body campaigning for the rights of the disabled on Sunday demanded an apology from Prime Minister Narendra Modi, joining a chorus of angry public responses to his remarks relating to dyslexia on Saturday.</p><p>The National Platform for the Rights of the Disabled (NPRD) said it &ldquo;condemns the disrespectful and insensitive remarks&rdquo; by Modi during an interaction with students. The NPRD also said that his remarks constituted an offence under a 2016 law.</p><p>During the video interaction that was part of the Smart India Hackathon, a BTech student from Uttarakhand started to explain to Modi that her project related to people with dyslexia, a learning disability.</p><p>&ldquo;I feel really blessed to get this opportunity to&hellip; express my words in front of you&hellip;. Basically, our idea is based on dyslexic people. Dyslexic children are those whose learning and writing pace is very slow. But their intelligence and creativity levels are quite high,&rdquo; she said, citing the example of a character from the Bollywood movie&nbsp;<em>Taare Zameen Par</em>.</p><p>At this point, video recordings of the event show Modi interrupting her to say: &ldquo;Could this idea help any 40 or 50-year-old child?&rdquo;</p><p>As Modi broke into a chuckle, many in the audience laughed and clapped before the student replied: &ldquo;Yes, sir, it will.&rdquo;</p><p>Modi then said: &ldquo;The mother of such children would become very happy.&rdquo;</p><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/3fcf6318-dcf3-4788-9179-d71032d839f9.jpg\" alt=\"Footage shows Modi listening to the student’s question.\" title=\"Footage shows Modi listening to the student’s question.\" class=\"fr-fic fr-dii\"><div data-image=\"'2'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-ba3a5a25-c87e-487b-a955-436d03d14cef\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Footage shows Modi listening to the student&rsquo;s question.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/1c6df6bf-449e-4cbf-b7a5-d311ef48ba25.jpg\" alt=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" title=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" class=\"fr-fic fr-dii\"><div data-image=\"'3'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-81ff80d5-e5a0-4c08-9719-397da5529f80\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><p>Many people as well as the NPRD have interpreted the comments as a dig at Congress president Rahul Gandhi and his mother Sonia Gandhi.</p><p>Modi &ldquo;sought to take pot shots at his political rivals&rdquo;, the NPRD said in a statement released on Sunday. &ldquo;In an uncalled for and totally insensitive response, the Prime Minister tried to portray dyslexic people in poor light. It is all the more unpardonable as it comes from a person holding such a high office.&rdquo;</p><p>The NPRD said Modi&rsquo;s remarks appeared to reflect a mindset he had revealed also during the 2014 election campaign. &ldquo;Even during the 2014 Lok Sabha election campaign, Modi had used terms like blind, deaf, lame to belittle his rivals. It is a reflection of a totally regressive mindset.&rdquo;</p><p>However, the NPRD added that other political leaders too seemed to be displaying a similar tendency. Rahul had called Modi &ldquo;schizophrenic&rdquo;, it said.</p><p>Many people took to Twitter to slam Modi for his remarks. &ldquo;A Prime Minister mocking dyslexia is nothing short of insensitive and shameful,&rdquo; posted Roshan Rai, who describes himself on Twitter as politically aware and a &ldquo;cricketoholic&rdquo;.</p><p>Another microblogger posted: &ldquo;Indeed shameful. That student is talking sense and amidst all this, completely unrelated, the Supreme Leader takes a jibe at Rahul &amp; his mom. How immature. Does this man not think of anything else, ever?&rdquo;</p><p>Vaibhav Sharma tweeted: &ldquo;Modi is a terrible human being. He&rsquo;s also a terrible Prime Minister but that really pales in comparison to his failings as a human being&hellip;.&rdquo;</p><p>The NPRD said the remarks constituted an offence under the Rights of Persons with Disabilities Act, 2016, which prescribes punishments for intentionally insulting or humiliating people with disabilities.</p><p>The laughter and claps by the students too have evoked anger. &ldquo;The worst part is&hellip; educated youth clapping over his remarks&rdquo;, a tweeter posted.</p><p>Another wrote: &ldquo;And the so-called future of the nation, the youth, is laughing and clapping.&rdquo;</p>",
  "categoryId": "5c7d5fde213e25232864dbe0",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1,
  "postImage": "1551721164325image48636b18-24c6-4969-8046-f0da5ede0209.jpg"
}


var postRes = {
  body: post
}

export const LOCATION_TOKEN = new InjectionToken<Location>('Window location object');


class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  //navigateByUrl(url: string) { return url; }
  navigate = jasmine.createSpy('navigate');

}
class MockedFacadeService {


  getUserDataFromLocalStorage() {
    return { res: true };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  getCategories(id) {
    return of(allCats);
  }
  savePost(requestData) {
    return of(postRes);
  }

  saveImage(uploadDat, id) {
    return of(post);
  }

}

class ActivatedRouteMock {
  queryParams = new Observable(observer => {
    const urlParams = {
      id: '5c7d5fde213e25232864dbe0'
    }
    observer.next(urlParams);
    observer.complete();
  });
}

class LoginServiceMock {
  getUserDataFromLocalStorage() {
    return { res: true };
  }
  userLoggedIn = true;
}

const locationStub = {
  back: jasmine.createSpy('back')
}

describe('PostsAddComponent', () => {
  let component: PostsAddComponent;
  let fixture: ComponentFixture<PostsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, FroalaEditorModule, FroalaViewModule],
      declarations: [PostsAddComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }, { provide: LoginService, useClass: LoginServiceMock }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, { provide: Location, useValue: locationStub }, { provide: FroalaEditorDirective }]
    }).overrideComponent(PostsAddComponent, {
      set: {
        template: ""
      }
    })  .compileComponents();
      
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.allCategoriesLoaded).toBeTruthy();
    expect(component.addPostForm).toBeDefined();
  });


  fit('should be clicked', () => {
    component.goBack();
    const location = fixture.debugElement.injector.get(Location);
    expect(location.back).toHaveBeenCalled();
  });

  fit('should add post', () => {
    component.addPostForm.patchValue({
      postCategory: '',
      postTitle: '',
      location: '',
      postContent: ''
    });
    component.onAddPost();
    expect(component.detailsCorrectlyFilled).toBeFalsy();
    var gg: BlobPart[] = [];
    component.selectedFile = new File(gg, 'ss');
    component.addPostForm.patchValue({
      postCategory: 'hhhhhhhh',
      postTitle: 'ssss hhhhh',
      location: 'BANGALORE',
      postContent: 'abcd efgh ijkl mnop qrst uvwx yzab'
    });
    component.onAddPost();
    expect(TestBed.get(Router).navigateByUrl).toHaveBeenCalledWith('/');
    spyOn(MockedFacadeService.prototype,'saveImage').and.callFake(()=>{return throwError('Error')});
    component.onAddPost();
    expect(component.errorOccurred).toBeTruthy();
    component.errorOccurred = false;
    spyOn(MockedFacadeService.prototype,'savePost').and.callFake(()=>{return throwError('Error')});
    component.onAddPost();
    expect(component.errorOccurred).toBeTruthy();
    

  });


});
