import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SidenavService } from '../components/navbar/sidenav.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements AfterViewInit {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  @ViewChild(MatSidenavContent) sidenavcontent!: MatSidenavContent;
  constructor(private sidenavService: SidenavService, private router: Router) {}

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
    ngAfterViewInit() {
      this.router.events.subscribe(event => {
        this.sidenavcontent.scrollTo({top: 0})
      })
    }

}
