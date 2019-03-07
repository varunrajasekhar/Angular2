import { Component,Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DH_CHECK_P_NOT_SAFE_PRIME } from 'constants';

@Component({
    selector: 'load-app',
    templateUrl: 'client/src/components/landing-page/landing-page.html'
})

@Injectable()
export class LandingPageComponent {

    title_1 = '`Vah`Run'
    title_2 = 'Restaurante'
    suffix='Run For it'

    constructor(private http: HttpClient) {
        this.getConfig().subscribe((data) => {
           console.log(data);
        });
    }

    ngOnInit() {
        this.title_1 = this.suffix;
    }
    
    

    getConfig() {
        return this.http.get("http://localhost:9090/api/empsData");
    }

    

}

