import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { of } from 'rxjs';
import { PostsService } from './posts.service';
var like = {
  "_id" : "5c73d3dccd57dd4190a312f1",
  "postId" : "5c73d338cd57dd4190a312ee",
  "userId" : "5c5729804cc4fa425c8e7b10",
  "__v" : 0
};

var dislike = {
  "_id" : "5c73d3dccd57dd4190a312f1",
  "postId" : "5c73d338cd57dd4190a312ee",
  "userId" : "5c5729804cc4fa425c8e7b10",
  "__v" : 0
};
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
describe('PostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: []
  }));

  fit('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });

  fit('expects service to fetch data with proper sorting',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getPosts(0, 9).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/0/9');
        expect(req.request.method).toEqual('GET');
        req.flush(of(allPosts));
      })
  );

  fit('expects service to fetch data with proper sortingtwo',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getTopPosts().subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/top');
        expect(req.request.method).toEqual('GET');
        req.flush(of(allPosts));
      })
  );

  fit('expects service to fetch data with proper sorting2',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getPostById('5c7d62cc213e25232864dbe4').subscribe(data => {
          //expect(data).toBe(of(allCategories[0]));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/5c7d62cc213e25232864dbe4');
        expect(req.request.method).toEqual('GET');
        req.flush(of(post));
      })
  );

  fit('expects service to fetch data with proper sorting2',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getPostsByCategoryId(post.categoryId,1,9).subscribe(data => {
          //expect(data).toBe(of(allCategories[0]));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/category/'+post.categoryId+'/1/9');
        expect(req.request.method).toEqual('GET');
        req.flush(of(post));
      })
  );

  fit('expects service to fetch data with proper sortingtwo',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getTopPostsImages(post).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/img');
        expect(req.request.method).toEqual('POST');
        req.flush(of(allPosts));
      })
  );

  fit('expects service to fetch data with proper sortingtwo',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.searchPosts(post.title).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/new/search');
        expect(req.request.method).toEqual('POST');
        req.flush(of(allPosts));
      })
  );

  fit('expects service to fetch data with proper sortingtwo',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getRelatedPosts(post.title).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/related');
        expect(req.request.method).toEqual('POST');
        req.flush(of(allPosts));
      })
  );

  fit('expects service to fetch data with proper sortingtwo',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getCountOfPosts().subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/count');
        expect(req.request.method).toEqual('GET');
        req.flush(of({ count: 1 }));
      })
  );

  fit('expects service to fetch data with proper sortingtwo',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, service: PostsService) => {
        service.getCountOfPostsByCategoryId(post._id).subscribe(data => {
          //expect(of(data)).toEqual(of(allCategories));
        });
        const req = httpMock.expectOne('http://localhost:3000/posts/count/category/'+post._id);
        expect(req.request.method).toEqual('GET');
        req.flush(of({ count: 1 }));
      })
  );
  fit('saves a post',
  inject([HttpTestingController, PostsService],
    (httpMock: HttpTestingController, service: PostsService) => {
      service.savePost(post).subscribe(data => {
        //expect(data).toBe(of(allCategories[0]));
      });
      const req = httpMock.expectOne('http://localhost:3000/posts/new');
      expect(req.request.method).toEqual('POST');
      req.flush(of(post));
    })
);
fit('saves an image',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.saveImage(data,post._id).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/posts/image/'+post._id);
    expect(req.request.method).toEqual('POST');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.updatePost(post._id, post).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/posts/update/'+post._id);
    expect(req.request.method).toEqual('PUT');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.deletePost(post._id).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/posts/delete/'+post._id);
    expect(req.request.method).toEqual('DELETE');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.findLikesByPostId(post._id).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/likes/post/'+post._id);
    expect(req.request.method).toEqual('GET');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.findDislikesByPostId(post._id).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/dislikes/post/'+post._id);
    expect(req.request.method).toEqual('GET');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.findLikeByPostIdAndUserId(post._id, '123').subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/likes/post/'+post._id+'/user/123');
    expect(req.request.method).toEqual('GET');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.findDislikeByPostIdAndUserId(post._id, '123').subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/dislikes/post/'+post._id+'/user/123');
    expect(req.request.method).toEqual('GET');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.findDislikesByUserId('123').subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/dislikes/post/user/123');
    expect(req.request.method).toEqual('GET');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.findLikesByUserId('123').subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/likes/post/user/123');
    expect(req.request.method).toEqual('GET');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.saveLike(like).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/likes/new');
    expect(req.request.method).toEqual('POST');
    req.flush(of(post));
  })
);
fit('updates a post',
inject([HttpTestingController, PostsService],
  (httpMock: HttpTestingController, service: PostsService) => {
    var data = new FormData();
    service.saveDislike(dislike).subscribe(data => {
      //expect(data).toBe(of(allCategories[0]));
    });
    const req = httpMock.expectOne('http://localhost:3000/reactions/dislikes/new');
    expect(req.request.method).toEqual('POST');
    req.flush(of(post));
  })
);


  /*
    fit('saves a category',
      inject([HttpTestingController, CategoriesService],
        (httpMock: HttpTestingController, service: CategoriesService) => {
          service.saveCategory(cat).subscribe(data => {
            //expect(data).toBe(of(allCategories[0]));
          });
          const req = httpMock.expectOne('http://localhost:3000/categories/new');
          expect(req.request.method).toEqual('POST');
          req.flush(of(cat));
        })
    );
  
    fit('updates a category',
    inject([HttpTestingController, CategoriesService],
      (httpMock: HttpTestingController, service: CategoriesService) => {
        service.updateCategory(cat._id, cat).subscribe(data => {
          //expect(data).toBe(of(allCategories[0]));
        });
        const req = httpMock.expectOne('http://localhost:3000/categories/'+cat._id+'/update');
        expect(req.request.method).toEqual('PUT');
        req.flush(of(cat));
      })
  );
  */
});
