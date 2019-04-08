import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SignUpService } from '../../services/signup.service'

@Component({
  selector: 'signup-component',
  templateUrl: 'client/src/components/signup-user-component/signup-user-component.html'
})

export class SignUpComponent {
  _baseUrl = "http://localhost:9090/postEmpsData";

  constructor(private router: Router, private http: HttpClient, public signUpService: SignUpService) {
        
  }

  ngOnInit() {
    
  }

  onSubmit(data) {
    console.log(data);
    console.log(this.signUpService)
     this.signUpService.enroll(data)
     .subscribe(
       data => console.log('success', data),
       error => console.log('error', error)
     )
  }

  


}