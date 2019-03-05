import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'home-app',
  templateUrl: 'client/src/components/home-component/home-component.html',
  //styleUrls: ['client/src/components/home-component/home-component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('someInput') someInput: ElementRef;
  title_1 = '`Vah`Run'
  title_2 = 'Restaurante'
  suffix = 'Run For it'
  search = 'search for it'
  isNavFixed = false;
  
  myNavEl : HTMLElement;
  name : string
  

  constructor() {
    window.addEventListener('scroll', () => {      
      this.myNavEl = <HTMLElement>document.getElementsByClassName('nav__wrapper')[0];
      if(this.myNavEl.offsetHeight <= window.scrollY) {
        this.myNavEl.style.position = 'fixed';
        this.myNavEl.style.top = '0';        
        this.myNavEl.style.margin = '0 auto';
        
      } else {
        this.myNavEl.style.position = '';
        this.myNavEl.style.top = '';
        this.myNavEl.style.marginTop = '5rem';
      }
    });
  }

  ngAfterViewInit() {
  }

  addClass() {
    return true;
  }

  ngOnInit() {
    this.title_1 = this.search;
  }

  onKeyUp(e) {
    console.log(e);
    this.title_1 = e.target.value;
    
  }

  onClick(e) {
    console.log(e);
    console.dir(e.target);
    console.log(e.target.value);
  }
}
