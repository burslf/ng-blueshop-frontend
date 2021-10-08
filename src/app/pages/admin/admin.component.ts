import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  host: {class: 'app-admin'}
})
export class AdminComponent implements OnInit {
  @ViewChild('dashboardSidenav') dashboardSidenav:MatSidenav
  adminMenu: any[] = [
    {name: 'Home', path : '/admin', selected: false, icon: 'home'},
    {name: 'Products', path : '/admin/products', selected: false, icon: ''},
    {name: 'Orders', path : '/admin/orders', selected: false, icon: ''},
    {name: 'Data Analysis', path : '/admin/data-analysis', selected: false, icon: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidenav() {
    this.dashboardSidenav.toggle()
  }
}
