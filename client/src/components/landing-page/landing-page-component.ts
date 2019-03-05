import { Component } from '@angular/core';
import { HomeComponent } from '../home-component/home-component';

@Component({
    selector: 'load-app',
    templateUrl: 'client/src/components/landing-page/landing-page.html'
})

export class LandingPageComponent { 
    title_1 = '`Vah`Run'
    title_2 = 'Restaurante'
    suffix='Run For it'
}