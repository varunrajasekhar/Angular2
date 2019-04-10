import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Constants } from '../../utils/Constants';

@Component({
  templateUrl: './client/src/components/nav-bar-component/nav-bar-component.html',
  selector: 'nav-bar-component'
})


@Injectable()
export class NavBarComponent {
  pages = Constants.pages;
  
  
  constructor() {
  }
  

  ngOnInit() {}

}