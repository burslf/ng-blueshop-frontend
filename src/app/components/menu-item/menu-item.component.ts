import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { NavItem } from 'mymenu';
import { SidenavService } from '../navbar/sidenav.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu', {static: true}) public childMenu: any;
  @Input() toggleSidenav:Function;
  @Input() location:string;
  
  constructor(public router: Router, private sidenav: SidenavService) {
  }

  ngOnInit() {

  }

  goToLink(path:string) {
    if(this.location == 'navbar') {
      this.router.navigate(['/' + path])
    }else if (this.location == 'sidenav') {
      this.router.navigate(['/' + path])
      this.toggleSidenav()
    }
  }
  
}
