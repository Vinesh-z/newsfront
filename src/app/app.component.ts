import { FormControl, ReactiveFormsModule } from '@angular/forms';
//import { SocketsService } from './core/shared/sockets.service';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './core/login/login.service';
import { FacadeService } from './core/services/facade.service';
import { Component } from '@angular/core';
import { SearchService } from './shared/search.service';
//import { NewsService } from './shared/news.service';
import * as moment from 'moment';
//import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  searchPressed: boolean = false;
  stockQuote: number;
 // sub: Subscription;
  sessionTimedOut: boolean = false;
  results = [];
  title = 'newsapp';
  userLoggedIn: boolean = false;
  userData;
  currentPermissions;
  inited: boolean = false;
  queryField: FormControl = new FormControl();
  loadedThePermissions: boolean = false;
  
  constructor(/*private dataService: SocketsService, private newsService: NewsService ,*/ private searchService: SearchService, private router: Router, private facadeService: FacadeService, private loginService: LoginService) {
    /*this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };*/
    
  }

  ngOnInit() {
    /*
this.sub = this.dataService.getQuotes()
    .subscribe(quote => {
      this.stockQuote = quote;
      console.log(this.stockQuote);
    });*/
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
    if(this.loginService.sessionTimedOut) {
      this.loginService.sessionTimedOut = false;
      this.sessionTimedOut = true;
    }
    if (this.facadeService.getUserDataFromLocalStorage()) {
      this.userData = this.facadeService.getUserDataFromLocalStorage();
      this.loginService.userLoggedIn = true;
      this.userLoggedIn = true;
      this.facadeService.resetGuestPermissions();
      this.inited = true;
    }
    else {
      this.facadeService.fetchGuestPermissions().subscribe(
        res => { this.facadeService.setGuestPermissions(res); 
        },
        error => { console.log(error); }
      )
    }
  }

  logout() {
    if (this.facadeService.getUserDataFromLocalStorage()) {
      if (JSON.parse(this.facadeService.logoutUser()).loggedOut) {
        this.userLoggedIn = false;
        localStorage.removeItem("expiryTime");
        this.facadeService.fetchGuestPermissions().subscribe(
          res => {
            this.facadeService.setGuestPermissions(res); 
            this.router.navigateByUrl('/');
          },
          error => { console.log(error); }
        )
      }
      else {
      }

    }
  }

  searchPosts(searchKey) {
    //console.log(searchKey);
    this.searchService.searchKey = '';
    this.searchService.searchKey = searchKey;
    //console.log(this.searchService.searchKey);
    this.searchService.searchKeySet = true;
    this.router.navigate(['/search']);
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  searchPressedFunc() {
    this.searchPressed = !this.searchPressed;
  }
}
