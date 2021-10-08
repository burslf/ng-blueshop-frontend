import { Component, OnInit } from '@angular/core';
import { mymenu, NavItem } from 'mymenu';
import { SidenavService } from '../navbar/sidenav.service';
import { ShowDropdown } from './sidenav-dropdown'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  shows: ShowDropdown = {
      "Clothing" : false,
      "By collection" : false,
      "dresses": false,
      "bottoms": false
  }
  navItems: NavItem[] = mymenu

  constructor(private sidenav: SidenavService) { }
  ngOnInit(): void {
  
  }

  toggleSidenav(){
    this.sidenav.toggle()
  }
  
  toggleDropdown(element:string) {
    this.shows[element] = !this.shows[element]
  }
}
