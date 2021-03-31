import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../navbar/sidenav.service';
import { ShowDropdown } from './sidenav-dropdown'
import {menu} from '../../../../mymenu'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  shows: ShowDropdown = {
      "clothing" : false,
      "collections" : false,
      "dresses": false,
      "bottoms": false
  }
  public menu = menu
  
  constructor(private sidenav: SidenavService) { }
  ngOnInit(): void {
    for(let category of menu) {
      console.log('P A R E N T')
      console.log(category.name)
      for(let children of category.children) {
        console.log('C H I L D S')
        console.log(children.name)
        if(children.children) {
          console.log('S U B    C H I L D R E N ');
          children.children.forEach(child => console.log(child.name))
        }
      }
    }
  }

  toggleSidenav(){
    this.sidenav.toggle()
  }
  
  toggleDropdown(element:string) {
    this.shows[element] = !this.shows[element]
  }
}
