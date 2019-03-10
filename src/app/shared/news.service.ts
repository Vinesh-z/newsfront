import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsDetail = '';

  api_key = '3862fe5949e7464c8c0eccf277ea4ec0';

  private http: HttpClient;

  constructor( handler: HttpBackend) { 
     this.http = new HttpClient(handler);
  }
  initSources(){
     return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
} 