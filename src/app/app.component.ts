import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './components/navbar/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blueshop';
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.sidenav)
  }
}
