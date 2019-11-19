import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  /*@ViewChild('stickyMenu') menuElement: ElementRef;*/
  // @ts-ignore
  @ViewChild('stickyMenu') menuElement: ElementRef;

  sticky = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset - 0.000001;
    this.sticky = windowScroll >= this.elementPosition;
  }
}
