import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FacadeService } from './../../../services/facade.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { PostsLikeComponent } from './posts-like.component';
import { APP_BASE_HREF } from '@angular/common';
import { min } from 'moment';

var likes = [
  {
    "_id": "5c7e1c6a0a423e0bac803824",
    "postId": "5c7d62cc213e25232864dbe4",
    "userId": "5c5729804cc4fa425c8e7b10",
    "updatedAt": "2019-03-05T06:51:22.206Z",
    "createdAt": "2019-03-05T06:51:22.206Z",
    "__v": 0
  }
]
var post = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "content": "<p>nationwide body campaigning for the rights of the disabled on Sunday demanded an apology from Prime Minister Narendra Modi, joining a chorus of angry public responses to his remarks relating to dyslexia on Saturday.</p><p>The National Platform for the Rights of the Disabled (NPRD) said it &ldquo;condemns the disrespectful and insensitive remarks&rdquo; by Modi during an interaction with students. The NPRD also said that his remarks constituted an offence under a 2016 law.</p><p>During the video interaction that was part of the Smart India Hackathon, a BTech student from Uttarakhand started to explain to Modi that her project related to people with dyslexia, a learning disability.</p><p>&ldquo;I feel really blessed to get this opportunity to&hellip; express my words in front of you&hellip;. Basically, our idea is based on dyslexic people. Dyslexic children are those whose learning and writing pace is very slow. But their intelligence and creativity levels are quite high,&rdquo; she said, citing the example of a character from the Bollywood movie&nbsp;<em>Taare Zameen Par</em>.</p><p>At this point, video recordings of the event show Modi interrupting her to say: &ldquo;Could this idea help any 40 or 50-year-old child?&rdquo;</p><p>As Modi broke into a chuckle, many in the audience laughed and clapped before the student replied: &ldquo;Yes, sir, it will.&rdquo;</p><p>Modi then said: &ldquo;The mother of such children would become very happy.&rdquo;</p><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/3fcf6318-dcf3-4788-9179-d71032d839f9.jpg\" alt=\"Footage shows Modi listening to the student’s question.\" title=\"Footage shows Modi listening to the student’s question.\" class=\"fr-fic fr-dii\"><div data-image=\"'2'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-ba3a5a25-c87e-487b-a955-436d03d14cef\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Footage shows Modi listening to the student&rsquo;s question.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/1c6df6bf-449e-4cbf-b7a5-d311ef48ba25.jpg\" alt=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" title=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" class=\"fr-fic fr-dii\"><div data-image=\"'3'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-81ff80d5-e5a0-4c08-9719-397da5529f80\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><p>Many people as well as the NPRD have interpreted the comments as a dig at Congress president Rahul Gandhi and his mother Sonia Gandhi.</p><p>Modi &ldquo;sought to take pot shots at his political rivals&rdquo;, the NPRD said in a statement released on Sunday. &ldquo;In an uncalled for and totally insensitive response, the Prime Minister tried to portray dyslexic people in poor light. It is all the more unpardonable as it comes from a person holding such a high office.&rdquo;</p><p>The NPRD said Modi&rsquo;s remarks appeared to reflect a mindset he had revealed also during the 2014 election campaign. &ldquo;Even during the 2014 Lok Sabha election campaign, Modi had used terms like blind, deaf, lame to belittle his rivals. It is a reflection of a totally regressive mindset.&rdquo;</p><p>However, the NPRD added that other political leaders too seemed to be displaying a similar tendency. Rahul had called Modi &ldquo;schizophrenic&rdquo;, it said.</p><p>Many people took to Twitter to slam Modi for his remarks. &ldquo;A Prime Minister mocking dyslexia is nothing short of insensitive and shameful,&rdquo; posted Roshan Rai, who describes himself on Twitter as politically aware and a &ldquo;cricketoholic&rdquo;.</p><p>Another microblogger posted: &ldquo;Indeed shameful. That student is talking sense and amidst all this, completely unrelated, the Supreme Leader takes a jibe at Rahul &amp; his mom. How immature. Does this man not think of anything else, ever?&rdquo;</p><p>Vaibhav Sharma tweeted: &ldquo;Modi is a terrible human being. He&rsquo;s also a terrible Prime Minister but that really pales in comparison to his failings as a human being&hellip;.&rdquo;</p><p>The NPRD said the remarks constituted an offence under the Rights of Persons with Disabilities Act, 2016, which prescribes punishments for intentionally insulting or humiliating people with disabilities.</p><p>The laughter and claps by the students too have evoked anger. &ldquo;The worst part is&hellip; educated youth clapping over his remarks&rdquo;, a tweeter posted.</p><p>Another wrote: &ldquo;And the so-called future of the nation, the youth, is laughing and clapping.&rdquo;</p>",
  "categoryId": "5c7d5fcc213e25232864dbdf",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1,
  "postImage": "1551721164325image48636b18-24c6-4969-8046-f0da5ede0209.jpg"
}

var postTwo = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "content": "<p>nationwide body campaigning for the rights of the disabled on Sunday demanded an apology from Prime Minister Narendra Modi, joining a chorus of angry public responses to his remarks relating to dyslexia on Saturday.</p><p>The National Platform for the Rights of the Disabled (NPRD) said it &ldquo;condemns the disrespectful and insensitive remarks&rdquo; by Modi during an interaction with students. The NPRD also said that his remarks constituted an offence under a 2016 law.</p><p>During the video interaction that was part of the Smart India Hackathon, a BTech student from Uttarakhand started to explain to Modi that her project related to people with dyslexia, a learning disability.</p><p>&ldquo;I feel really blessed to get this opportunity to&hellip; express my words in front of you&hellip;. Basically, our idea is based on dyslexic people. Dyslexic children are those whose learning and writing pace is very slow. But their intelligence and creativity levels are quite high,&rdquo; she said, citing the example of a character from the Bollywood movie&nbsp;<em>Taare Zameen Par</em>.</p><p>At this point, video recordings of the event show Modi interrupting her to say: &ldquo;Could this idea help any 40 or 50-year-old child?&rdquo;</p><p>As Modi broke into a chuckle, many in the audience laughed and clapped before the student replied: &ldquo;Yes, sir, it will.&rdquo;</p><p>Modi then said: &ldquo;The mother of such children would become very happy.&rdquo;</p><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/3fcf6318-dcf3-4788-9179-d71032d839f9.jpg\" alt=\"Footage shows Modi listening to the student’s question.\" title=\"Footage shows Modi listening to the student’s question.\" class=\"fr-fic fr-dii\"><div data-image=\"'2'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-ba3a5a25-c87e-487b-a955-436d03d14cef\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Footage shows Modi listening to the student&rsquo;s question.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/1c6df6bf-449e-4cbf-b7a5-d311ef48ba25.jpg\" alt=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" title=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" class=\"fr-fic fr-dii\"><div data-image=\"'3'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-81ff80d5-e5a0-4c08-9719-397da5529f80\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><p>Many people as well as the NPRD have interpreted the comments as a dig at Congress president Rahul Gandhi and his mother Sonia Gandhi.</p><p>Modi &ldquo;sought to take pot shots at his political rivals&rdquo;, the NPRD said in a statement released on Sunday. &ldquo;In an uncalled for and totally insensitive response, the Prime Minister tried to portray dyslexic people in poor light. It is all the more unpardonable as it comes from a person holding such a high office.&rdquo;</p><p>The NPRD said Modi&rsquo;s remarks appeared to reflect a mindset he had revealed also during the 2014 election campaign. &ldquo;Even during the 2014 Lok Sabha election campaign, Modi had used terms like blind, deaf, lame to belittle his rivals. It is a reflection of a totally regressive mindset.&rdquo;</p><p>However, the NPRD added that other political leaders too seemed to be displaying a similar tendency. Rahul had called Modi &ldquo;schizophrenic&rdquo;, it said.</p><p>Many people took to Twitter to slam Modi for his remarks. &ldquo;A Prime Minister mocking dyslexia is nothing short of insensitive and shameful,&rdquo; posted Roshan Rai, who describes himself on Twitter as politically aware and a &ldquo;cricketoholic&rdquo;.</p><p>Another microblogger posted: &ldquo;Indeed shameful. That student is talking sense and amidst all this, completely unrelated, the Supreme Leader takes a jibe at Rahul &amp; his mom. How immature. Does this man not think of anything else, ever?&rdquo;</p><p>Vaibhav Sharma tweeted: &ldquo;Modi is a terrible human being. He&rsquo;s also a terrible Prime Minister but that really pales in comparison to his failings as a human being&hellip;.&rdquo;</p><p>The NPRD said the remarks constituted an offence under the Rights of Persons with Disabilities Act, 2016, which prescribes punishments for intentionally insulting or humiliating people with disabilities.</p><p>The laughter and claps by the students too have evoked anger. &ldquo;The worst part is&hellip; educated youth clapping over his remarks&rdquo;, a tweeter posted.</p><p>Another wrote: &ldquo;And the so-called future of the nation, the youth, is laughing and clapping.&rdquo;</p>",
  "categoryId": "5c7d5fcc213e25232864dbdf",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1
}

var postThree = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "content": "<p>nationwide body campaigning for the rights of the disabled on Sunday demanded an apology from Prime Minister Narendra Modi, joining a chorus of angry public responses to his remarks relating to dyslexia on Saturday.</p><p>The National Platform for the Rights of the Disabled (NPRD) said it &ldquo;condemns the disrespectful and insensitive remarks&rdquo; by Modi during an interaction with students. The NPRD also said that his remarks constituted an offence under a 2016 law.</p><p>During the video interaction that was part of the Smart India Hackathon, a BTech student from Uttarakhand started to explain to Modi that her project related to people with dyslexia, a learning disability.</p><p>&ldquo;I feel really blessed to get this opportunity to&hellip; express my words in front of you&hellip;. Basically, our idea is based on dyslexic people. Dyslexic children are those whose learning and writing pace is very slow. But their intelligence and creativity levels are quite high,&rdquo; she said, citing the example of a character from the Bollywood movie&nbsp;<em>Taare Zameen Par</em>.</p><p>At this point, video recordings of the event show Modi interrupting her to say: &ldquo;Could this idea help any 40 or 50-year-old child?&rdquo;</p><p>As Modi broke into a chuckle, many in the audience laughed and clapped before the student replied: &ldquo;Yes, sir, it will.&rdquo;</p><p>Modi then said: &ldquo;The mother of such children would become very happy.&rdquo;</p><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/3fcf6318-dcf3-4788-9179-d71032d839f9.jpg\" alt=\"Footage shows Modi listening to the student’s question.\" title=\"Footage shows Modi listening to the student’s question.\" class=\"fr-fic fr-dii\"><div data-image=\"'2'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-ba3a5a25-c87e-487b-a955-436d03d14cef\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Footage shows Modi listening to the student&rsquo;s question.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/1c6df6bf-449e-4cbf-b7a5-d311ef48ba25.jpg\" alt=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" title=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" class=\"fr-fic fr-dii\"><div data-image=\"'3'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-81ff80d5-e5a0-4c08-9719-397da5529f80\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><p>Many people as well as the NPRD have interpreted the comments as a dig at Congress president Rahul Gandhi and his mother Sonia Gandhi.</p><p>Modi &ldquo;sought to take pot shots at his political rivals&rdquo;, the NPRD said in a statement released on Sunday. &ldquo;In an uncalled for and totally insensitive response, the Prime Minister tried to portray dyslexic people in poor light. It is all the more unpardonable as it comes from a person holding such a high office.&rdquo;</p><p>The NPRD said Modi&rsquo;s remarks appeared to reflect a mindset he had revealed also during the 2014 election campaign. &ldquo;Even during the 2014 Lok Sabha election campaign, Modi had used terms like blind, deaf, lame to belittle his rivals. It is a reflection of a totally regressive mindset.&rdquo;</p><p>However, the NPRD added that other political leaders too seemed to be displaying a similar tendency. Rahul had called Modi &ldquo;schizophrenic&rdquo;, it said.</p><p>Many people took to Twitter to slam Modi for his remarks. &ldquo;A Prime Minister mocking dyslexia is nothing short of insensitive and shameful,&rdquo; posted Roshan Rai, who describes himself on Twitter as politically aware and a &ldquo;cricketoholic&rdquo;.</p><p>Another microblogger posted: &ldquo;Indeed shameful. That student is talking sense and amidst all this, completely unrelated, the Supreme Leader takes a jibe at Rahul &amp; his mom. How immature. Does this man not think of anything else, ever?&rdquo;</p><p>Vaibhav Sharma tweeted: &ldquo;Modi is a terrible human being. He&rsquo;s also a terrible Prime Minister but that really pales in comparison to his failings as a human being&hellip;.&rdquo;</p><p>The NPRD said the remarks constituted an offence under the Rights of Persons with Disabilities Act, 2016, which prescribes punishments for intentionally insulting or humiliating people with disabilities.</p><p>The laughter and claps by the students too have evoked anger. &ldquo;The worst part is&hellip; educated youth clapping over his remarks&rdquo;, a tweeter posted.</p><p>Another wrote: &ldquo;And the so-called future of the nation, the youth, is laughing and clapping.&rdquo;</p>",
  "categoryId": "5c7d5fcc213e25232864dbdf",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1,
  "urlToImage": "1551721164325image48636b18-24c6-4969-8046-f0da5ede0209.jpg"
}

var posts = [
  post
]

class MockedFacadeService {
  getUserDataFromLocalStorage() {
    return {
      userId: "5c5729804cc4fa425c8e7b10",
      permissions: { 
        "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, 
        "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, 
        "category": { "create": false, "read": true, "update": false, "delete": false } 
      }
    };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }
  findLikesByUserId(id) {
    return of(likes);
  }
  getPostById(id) {
    return of(postTwo);
  }
}

class MockedFacadeServiceTwo {
  getUserDataFromLocalStorage() {
    return {
      userId: "5c5729804cc4fa425c8e7b10",
      permissions: { 
        "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, 
        "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, 
        "category": { "create": false, "read": true, "update": false, "delete": false } 
      }
    };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }
  findLikesByUserId(id) {
    return of(likes);
  }
  getPostById(id) {
    return of(post);
  }
}
class MockedFacadeServiceThree {
  getUserDataFromLocalStorage() {
    return {
      userId: "5c5729804cc4fa425c8e7b10",
      permissions: { 
        "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, 
        "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, 
        "category": { "create": false, "read": true, "update": false, "delete": false } 
      }
    };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }
  findLikesByUserId(id) {
    return of(likes);
  }
  getPostById(id) {
    return of(postThree);
  }
}
class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
  navigate = jasmine.createSpy('navigate');

}
describe('PostsLikeComponent', () => {
  let component: PostsLikeComponent;
  let fixture: ComponentFixture<PostsLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule, RouterTestingModule, HttpClientModule],
      declarations: [ PostsLikeComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, { provide: FacadeService, useClass: MockedFacadeService }
      
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
    expect(component.userData).toBeDefined();
    expect(component.allPostsLoaded).toBeTruthy();
    spyOn(FacadeService.prototype,'findLikesByUserId').and.callFake(()=>{return false});
    component.ngOnInit();
    expect(component.allPostsLoaded).toBeTruthy();
    
  });
});

describe('PostsLikeComponent', () => {
  let component: PostsLikeComponent;
  let fixture: ComponentFixture<PostsLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule, RouterTestingModule, HttpClientModule],
      declarations: [ PostsLikeComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, { provide: FacadeService, useClass: MockedFacadeServiceTwo }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('PostsLikeComponent', () => {
  let component: PostsLikeComponent;
  let fixture: ComponentFixture<PostsLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule, RouterTestingModule, HttpClientModule],
      declarations: [ PostsLikeComponent ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, { provide: FacadeService, useClass: MockedFacadeServiceThree }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
