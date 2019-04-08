import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { LandingPageContainer } from './containers/landing-page-container/landing-page-container';
import { HomeComponent } from './components/home-component/home-component';
import { LoginPageContainer } from './containers/login-page-container/login-page-container';
import { LoginComponent } from './components/login-user-component/login-user-component'
import { SignUpComponent } from './components/signup-user-component/signup-user-component';
import { LoadApp } from './load-app/load-app';
import { FormsModule } from '@angular/forms';

import { SignUpService } from './services/signup.service';
 

const appRoutes: Routes = [
  { path: 'landing-page', component: LandingPageContainer },
  { path: 'login-page', component: LoginPageContainer },
  { path: 'signup-page', component: SignUpComponent },
  { path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({ 
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only ( "false" removes all the console statements from the browser)
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ], 
  declarations: [LoadApp, LandingPageContainer, HomeComponent, LoginPageContainer, LoginComponent, SignUpComponent], 
  //bootstrap: [LandingPageContainer, LoginPageContainer],
  bootstrap: [LoadApp],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, SignUpService]
}) 

export class AppModule{}; 