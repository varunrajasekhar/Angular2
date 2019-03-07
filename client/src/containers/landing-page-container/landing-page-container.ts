import { Component,Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-page-container',
    templateUrl: 'client/src/containers/landing-page-container/landing-page.html'
})

//@Injectable()
export class LandingPageContainer {

  title_1 = '`Vah`Run'
  title_2 = 'Restaurante'
  suffix='Run For it'

    constructor(private http: HttpClient, private router: Router) {
        this.getConfig().subscribe((data) => {
           //console.log(data);
        });
        console.log('varun',this)
    }

    ngOnInit() {
        this.title_1 = this.suffix;
    }    

    getConfig() {
        return this.http.get("http://localhost:9090/api/empsData");
    }
    
    btnClick() {
        console.log(this)
    }

}

