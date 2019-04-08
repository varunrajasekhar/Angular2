import { Component,Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'client/src/containers/login-page-container/login-page.html',
  selector: 'login-page-container'
})

export class LoginPageContainer {
  constructor(private router : Router) {
    
  }
}