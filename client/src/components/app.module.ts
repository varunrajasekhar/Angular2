import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page-component';
import { HomeComponent } from './home-component/home-component';

@NgModule({ 
  imports: [BrowserModule, HttpClientModule], 
  declarations: [LandingPageComponent, HomeComponent], 
  bootstrap: [LandingPageComponent]
}) 

export class AppModule{}; 