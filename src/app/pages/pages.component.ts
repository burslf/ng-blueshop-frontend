import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Event, Router } from '@angular/router';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { SidenavService } from '../components/navbar/sidenav.service';
import {fromEvent} from 'rxjs';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterViewInit {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  @ViewChild(MatSidenavContent) sidenavcontent!: MatSidenavContent;
  // @ViewChild('destinationRef', {static: true}) _destinationRef: ElementRef;

  constructor(private sidenavService: SidenavService, private router: Router, private scrollToService: ScrollToService) {}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    // const destination = fromEvent(this._destinationRef.nativeElement, 'scroll')
    // const example = destination.pipe(map((event:any) => `Event time: ${event.timeStamp}` ))
    // const subscribe = example.subscribe(val => console.log(val))
    // .subscribe((e: Event) => console.log({scrollPosition: e.target['scrollTop']}));
  }
    ngAfterViewInit() {
      this.router.events.subscribe(event => {
        this.sidenavcontent.scrollTo({top: 0})
      })
    }

}
