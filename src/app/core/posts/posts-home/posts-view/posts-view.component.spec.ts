import { LoaderComponent } from './../../../../shared/loader/loader/loader.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { Location } from '@angular/common';
import { FacadeService } from './../../../services/facade.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { LoginService } from 'src/app/core/login/login.service';
import * as $ from 'jquery';
import { PostsViewComponent } from './posts-view.component';
import { By } from '@angular/platform-browser';

var trendingPosts = [
  {
      "postId": "5c7d630e213e25232864dbe5",
      "likesCount": 1,
      "title": "For Rahul, not work as usual",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "postImage": "1551721231016imagef813de77-aa20-4b6e-aa6f-afd098462ba9.jpg"
  },
  {
      "postId": "5c7ee2899359f062d8121237",
      "likesCount": 1,
      "title": "India and England favourites in ICC World Cup 2019: VVS Laxman",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "postImage": "1551819401851imageaac3d7ed-6ac7-44e6-8c41-3fc55eebdf56.jpg"
  },
  {
      "postId": "5c7ee6dfddfddf18e4a45d61",
      "likesCount": 1,
      "title": "National Science Centre is failing on essentials",
      "categoryId": "5c7d5fde213e25232864dbe0",
  },
  {
      "postId": "5c7d61fd213e25232864dbe2",
      "likesCount": 1,
      "title": "East Bengal close in on Chennai City",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "postImage": "1551720957977image7af16e90-ac95-42d9-a69f-0626c9b7548f.jpg"
  },
  {
      "postId": "5c7ee0b19359f062d812122f",
      "likesCount": 1,
      "title": "When Indian women started playing cricket",
      "categoryId": "5c7d5fde213e25232864dbe0",
      "urlToImage": "1551818929764image2c580f2e-f538-4a1b-84bf-160acbaa1a3f.jpg"
  }
];
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

var post1 = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "content": "<p>nationwide body campaigning for the rights of the disabled on Sunday demanded an apology from Prime Minister Narendra Modi, joining a chorus of angry public responses to his remarks relating to dyslexia on Saturday.</p><p>The National Platform for the Rights of the Disabled (NPRD) said it &ldquo;condemns the disrespectful and insensitive remarks&rdquo; by Modi during an interaction with students. The NPRD also said that his remarks constituted an offence under a 2016 law.</p><p>During the video interaction that was part of the Smart India Hackathon, a BTech student from Uttarakhand started to explain to Modi that her project related to people with dyslexia, a learning disability.</p><p>&ldquo;I feel really blessed to get this opportunity to&hellip; express my words in front of you&hellip;. Basically, our idea is based on dyslexic people. Dyslexic children are those whose learning and writing pace is very slow. But their intelligence and creativity levels are quite high,&rdquo; she said, citing the example of a character from the Bollywood movie&nbsp;<em>Taare Zameen Par</em>.</p><p>At this point, video recordings of the event show Modi interrupting her to say: &ldquo;Could this idea help any 40 or 50-year-old child?&rdquo;</p><p>As Modi broke into a chuckle, many in the audience laughed and clapped before the student replied: &ldquo;Yes, sir, it will.&rdquo;</p><p>Modi then said: &ldquo;The mother of such children would become very happy.&rdquo;</p><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/3fcf6318-dcf3-4788-9179-d71032d839f9.jpg\" alt=\"Footage shows Modi listening to the student’s question.\" title=\"Footage shows Modi listening to the student’s question.\" class=\"fr-fic fr-dii\"><div data-image=\"'2'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-ba3a5a25-c87e-487b-a955-436d03d14cef\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Footage shows Modi listening to the student&rsquo;s question.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/1c6df6bf-449e-4cbf-b7a5-d311ef48ba25.jpg\" alt=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" title=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" class=\"fr-fic fr-dii\"><div data-image=\"'3'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-81ff80d5-e5a0-4c08-9719-397da5529f80\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><p>Many people as well as the NPRD have interpreted the comments as a dig at Congress president Rahul Gandhi and his mother Sonia Gandhi.</p><p>Modi &ldquo;sought to take pot shots at his political rivals&rdquo;, the NPRD said in a statement released on Sunday. &ldquo;In an uncalled for and totally insensitive response, the Prime Minister tried to portray dyslexic people in poor light. It is all the more unpardonable as it comes from a person holding such a high office.&rdquo;</p><p>The NPRD said Modi&rsquo;s remarks appeared to reflect a mindset he had revealed also during the 2014 election campaign. &ldquo;Even during the 2014 Lok Sabha election campaign, Modi had used terms like blind, deaf, lame to belittle his rivals. It is a reflection of a totally regressive mindset.&rdquo;</p><p>However, the NPRD added that other political leaders too seemed to be displaying a similar tendency. Rahul had called Modi &ldquo;schizophrenic&rdquo;, it said.</p><p>Many people took to Twitter to slam Modi for his remarks. &ldquo;A Prime Minister mocking dyslexia is nothing short of insensitive and shameful,&rdquo; posted Roshan Rai, who describes himself on Twitter as politically aware and a &ldquo;cricketoholic&rdquo;.</p><p>Another microblogger posted: &ldquo;Indeed shameful. That student is talking sense and amidst all this, completely unrelated, the Supreme Leader takes a jibe at Rahul &amp; his mom. How immature. Does this man not think of anything else, ever?&rdquo;</p><p>Vaibhav Sharma tweeted: &ldquo;Modi is a terrible human being. He&rsquo;s also a terrible Prime Minister but that really pales in comparison to his failings as a human being&hellip;.&rdquo;</p><p>The NPRD said the remarks constituted an offence under the Rights of Persons with Disabilities Act, 2016, which prescribes punishments for intentionally insulting or humiliating people with disabilities.</p><p>The laughter and claps by the students too have evoked anger. &ldquo;The worst part is&hellip; educated youth clapping over his remarks&rdquo;, a tweeter posted.</p><p>Another wrote: &ldquo;And the so-called future of the nation, the youth, is laughing and clapping.&rdquo;</p>",
  "categoryId": "5c7d5fde213e25232864dbe0",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1
}

var post2 = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "content": "<p>nationwide body campaigning for the rights of the disabled on Sunday demanded an apology from Prime Minister Narendra Modi, joining a chorus of angry public responses to his remarks relating to dyslexia on Saturday.</p><p>The National Platform for the Rights of the Disabled (NPRD) said it &ldquo;condemns the disrespectful and insensitive remarks&rdquo; by Modi during an interaction with students. The NPRD also said that his remarks constituted an offence under a 2016 law.</p><p>During the video interaction that was part of the Smart India Hackathon, a BTech student from Uttarakhand started to explain to Modi that her project related to people with dyslexia, a learning disability.</p><p>&ldquo;I feel really blessed to get this opportunity to&hellip; express my words in front of you&hellip;. Basically, our idea is based on dyslexic people. Dyslexic children are those whose learning and writing pace is very slow. But their intelligence and creativity levels are quite high,&rdquo; she said, citing the example of a character from the Bollywood movie&nbsp;<em>Taare Zameen Par</em>.</p><p>At this point, video recordings of the event show Modi interrupting her to say: &ldquo;Could this idea help any 40 or 50-year-old child?&rdquo;</p><p>As Modi broke into a chuckle, many in the audience laughed and clapped before the student replied: &ldquo;Yes, sir, it will.&rdquo;</p><p>Modi then said: &ldquo;The mother of such children would become very happy.&rdquo;</p><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/3fcf6318-dcf3-4788-9179-d71032d839f9.jpg\" alt=\"Footage shows Modi listening to the student’s question.\" title=\"Footage shows Modi listening to the student’s question.\" class=\"fr-fic fr-dii\"><div data-image=\"'2'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-ba3a5a25-c87e-487b-a955-436d03d14cef\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Footage shows Modi listening to the student&rsquo;s question.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><figure><img data-fr-image-pasted=\"true\" src=\"https://static.telegraphindia.com/library/THE_TELEGRAPH/image/2019/3/1c6df6bf-449e-4cbf-b7a5-d311ef48ba25.jpg\" alt=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" title=\"Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.\" class=\"fr-fic fr-dii\"><div data-image=\"'3'\"><div data-description=\"Modi tries to portray dyslexic people in poor light by taking pot shots at his political rivals\" data-title=\"Call for apology after PM ‘joke’\" data-url=\"https://www.telegraphindia.com/india/call-for-apology-after-modi-dyslexia-joke/cid/1686156\"><div aria-labelledby=\"at-81ff80d5-e5a0-4c08-9719-397da5529f80\">AddThis Sharing Buttons<a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\"></a><a tabindex=\"1\">2.4K</a></div></div></div><figcaption>Modi interrupts the student, utters what he appears to think is a joke and makes a wry face.Screen grab from Narendra Modi&#39;s Twitter profile (@narendramodi)</figcaption></figure><p>Many people as well as the NPRD have interpreted the comments as a dig at Congress president Rahul Gandhi and his mother Sonia Gandhi.</p><p>Modi &ldquo;sought to take pot shots at his political rivals&rdquo;, the NPRD said in a statement released on Sunday. &ldquo;In an uncalled for and totally insensitive response, the Prime Minister tried to portray dyslexic people in poor light. It is all the more unpardonable as it comes from a person holding such a high office.&rdquo;</p><p>The NPRD said Modi&rsquo;s remarks appeared to reflect a mindset he had revealed also during the 2014 election campaign. &ldquo;Even during the 2014 Lok Sabha election campaign, Modi had used terms like blind, deaf, lame to belittle his rivals. It is a reflection of a totally regressive mindset.&rdquo;</p><p>However, the NPRD added that other political leaders too seemed to be displaying a similar tendency. Rahul had called Modi &ldquo;schizophrenic&rdquo;, it said.</p><p>Many people took to Twitter to slam Modi for his remarks. &ldquo;A Prime Minister mocking dyslexia is nothing short of insensitive and shameful,&rdquo; posted Roshan Rai, who describes himself on Twitter as politically aware and a &ldquo;cricketoholic&rdquo;.</p><p>Another microblogger posted: &ldquo;Indeed shameful. That student is talking sense and amidst all this, completely unrelated, the Supreme Leader takes a jibe at Rahul &amp; his mom. How immature. Does this man not think of anything else, ever?&rdquo;</p><p>Vaibhav Sharma tweeted: &ldquo;Modi is a terrible human being. He&rsquo;s also a terrible Prime Minister but that really pales in comparison to his failings as a human being&hellip;.&rdquo;</p><p>The NPRD said the remarks constituted an offence under the Rights of Persons with Disabilities Act, 2016, which prescribes punishments for intentionally insulting or humiliating people with disabilities.</p><p>The laughter and claps by the students too have evoked anger. &ldquo;The worst part is&hellip; educated youth clapping over his remarks&rdquo;, a tweeter posted.</p><p>Another wrote: &ldquo;And the so-called future of the nation, the youth, is laughing and clapping.&rdquo;</p>",
  "categoryId": "5c7d5fde213e25232864dbe0",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1,
  "urlToImage": "1551721164325image48636b18-24c6-4969-8046-f0da5ede0209.jpg"
}

var post3 = {
  "_id": "5c7d62cc213e25232864dbe4",
  "title": "Call for apology after PM ‘joke’",
  "categoryId": "5c7d5fde213e25232864dbe0",
  "location": "Delhi",
  "userId": "5c7d5e70824a29284cb32e2e",
  "updatedAt": "2019-03-04T17:39:24.396Z",
  "createdAt": "2019-03-04T17:39:24.200Z",
  "__v": 1,
  "urlToImage": "1551721164325image48636b18-24c6-4969-8046-f0da5ede0209.jpg"
}

var allPosts = [post, post1, post2, post3];

var postRes = {
  body: post
}

export const LOCATION_TOKEN = new InjectionToken<Location>('Window location object');


class MockRouter {
  navigateByUrl(url: string) { return url; }
  navigate = jasmine.createSpy('navigate');

}

class MockedFacadeServiceTwo {


  getTopPosts(){
    return of(trendingPosts);
  }

  getPosts(f,s) {
    return of(allPosts);
  }

  getCountOfPostsByCategoryId(id){
    return of({count: 56});
  }

  getPostsByCategoryId() {
    return of(allPosts);
  }

  getCountOfPosts(){
    return of({count: 56});
  }

  getPostById(id) {
    return of(post);
  }

  getUserDataFromLocalStorage() {
    return { res: true, permissions: { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } } };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  getCategories(id) {
    return of(allCats);
  }
  updatePost(id, data) {
    return of(postRes);
  }



}

class MockedFacadeService {
  getPosts(f,s) {
    return of(allPosts);
  }

  getCountOfPostsByCategoryId(id){
    return of({count: 1});
  }

  getPostsByCategoryId() {
    return of(allPosts);
  }

  getCountOfPosts(){
    return of({count: 1});
  }

  getPostById(id) {
    return of(post);
  }

  getUserDataFromLocalStorage() {
    return { res: true, permissions: { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } } };
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  getCategories(id) {
    return of(allCats);
  }
  updatePost(id, data) {
    return of(postRes);
  }


}

class MockedFacadeServiceForError {
  getUserDataFromLocalStorage() {
    return false;
  }
  getGuestPermissionsFromLocalStorage() {
    return { "comments": { "create": false, "read": true, "update": false, "deleteAny": false, "delete": false }, "post": { "create": false, "read": true, "update": false, "delete": false, "like": false, "dislike": false }, "category": { "create": false, "read": true, "update": false, "delete": false } };
  }

  getCategoryById(id) {
    return throwError('error!');
  }

}

class ActivatedRouteMockTwo {
  queryParams = new Observable(observer => {
    const urlParams = {
      notid: '5c7d5fde213e25232864dbe0'
    }
    observer.next(urlParams);
    observer.complete();
  });
}


class ActivatedRouteMock {
  queryParams = new Observable(observer => {
    const urlParams = {
      categoryId: '5c7d5fde213e25232864dbe0',
      first: 1,
      second: 9
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
describe('PostsViewComponent', () => {
  let component: PostsViewComponent;
  let fixture: ComponentFixture<PostsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, FroalaEditorModule, FroalaViewModule],
      declarations: [PostsViewComponent, LoaderComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeService },
      { provide: Router, useClass: MockRouter }, { provide: LoginService, useClass: LoginServiceMock }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }, { provide: Location, useValue: locationStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should filter page by navigation', () => {
    component.filterPage('5c7d5fde213e25232864dbe0',1,9);
    expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/'], { queryParams: { categoryId: "5c7d5fde213e25232864dbe0", first: 1, second: 9 } });

  });

  fit('should filter page by navigation when next button clicked', () => {
    component.filterPageNext('5c7d5fde213e25232864dbe0',1,1,9);
    expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/'], { queryParams: { categoryId: "5c7d5fde213e25232864dbe0", first: 2, second: 9 } });

  });

  fit('should filter by category', () => {
    component.filterByCategory('5c7d5fde213e25232864dbe0', 1, 9);
   // expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/'], { queryParams: { categoryId: "5c7d5fde213e25232864dbe0", first: 2, second: 9 } });
    component.filterByCategory('all', 1, 9);
  });

});
describe('PostsViewComponent', () => {
  let component: PostsViewComponent;
  let fixture: ComponentFixture<PostsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule, FormsModule, FroalaEditorModule, FroalaViewModule],
      declarations: [PostsViewComponent, LoaderComponent],
      providers: [{ provide: FacadeService, useClass: MockedFacadeServiceTwo },
      { provide: Router, useClass: MockRouter }, { provide: LoginService, useClass: LoginServiceMock }, { provide: Router, useClass: MockRouter }, {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMockTwo
      }, { provide: Location, useValue: locationStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });


  fit('should filter by category', () => {
    component.filterByCategory('5c7d5fde213e25232864dbe0', 1, 9);
   // expect(TestBed.get(Router).navigate).toHaveBeenCalledWith(['/'], { queryParams: { categoryId: "5c7d5fde213e25232864dbe0", first: 2, second: 9 } });
    component.filterByCategory('all', 1, 9);
  });

  fit('should emit new season on select change event', () => {
    fixture.detectChanges();
    let select = fixture.debugElement.query(By.css('#postCategory')).nativeElement as HTMLSelectElement;
  
    select.selectedIndex = 1; 
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  
  });



});