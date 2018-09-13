import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { LandingPageComponent } from './landing-page/landing-page-component';

@NgModule({ 
  imports: [BrowserModule], 
  declarations: [LandingPageComponent], 
  bootstrap: [LandingPageComponent]
}) 

export class AppModule{}; 