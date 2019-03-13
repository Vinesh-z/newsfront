import { Interceptor } from './shared/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AgmCoreModule } from '@agm/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { socialLoginProps } from 'src/properties/social.prop';
import { LoaderComponent } from './shared/loader/loader/loader.component';
import { HighlightDirective } from './shared/highlight.directive';
import { MymodalDirective } from './shared/mymodal.directive';
import { MymodalComponent } from './shared/mymodal/mymodal.component';
import { GlobalErrorHandler } from './core/errors/GlobalErrorHandler';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(socialLoginProps.FACEBOOK_CLIENT_ID)
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(socialLoginProps.GOOGLE_CLIENT_ID)
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MymodalDirective,
    MymodalComponent
  ],
  imports: [
    BrowserModule,
    FroalaEditorModule,
    BrowserAnimationsModule,
    FroalaViewModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    HttpClientModule,
    CommonModule,
    AngularFontAwesomeModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3jd636bBrRo6a8IZ5LnHtKpjE1aFnmQM'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    {
      provide: ErrorHandler, 
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
