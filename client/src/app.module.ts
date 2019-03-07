import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import { LandingPageContainer } from './containers/landing-page-container/landing-page-container';
import { HomeComponent } from './components/home-component/home-component';
import { LoginPageContainer } from './containers/login-page-container/login-page-container';
import { LoadApp } from './load-app/load-app';


const appRoutes: Routes = [
  { path: 'landing-page', component: LandingPageContainer },
  { path: 'login-page', component: LoginPageContainer },
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
    HttpClientModule
  ], 
  declarations: [LoadApp, LandingPageContainer, HomeComponent, LoginPageContainer], 
  //bootstrap: [LandingPageContainer, LoginPageContainer],
  bootstrap: [LoadApp],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
}) 

export class AppModule{}; 