import { Component, HostListener, OnInit } from '@angular/core';
import { Cart, cart } from 'src/app/model/cart';
import { SidenavService } from './sidenav.service';
import { CookieService } from 'ngx-cookie-service'
import { CartService } from '../../services/cart.service'
import { NavItem } from './../../../../mymenu';
import { mymenu } from './../../../../mymenu'
import { ScrollPositionService } from 'src/app/services/scrollPosition.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {'class': 'app-navbar'}
})
export class NavbarComponent implements OnInit {
  womenCategory: string[] = ['Tops', 'Corsets', 'Dresses', 'Denim', 'Bottoms', 'Sweats', 'Loungewear'];
  showTransparency: boolean;
  pictureName:string = ''
  
  constructor(private sidenav: SidenavService, private cookie: CookieService, private cartService: CartService, private scrollPositionService: ScrollPositionService) {
  }
  public cart: Cart | null = null
  navItems: NavItem[] = mymenu

  ngOnInit(): void {
    this.scrollPositionService.pictureName.subscribe(r => this.pictureName = r)
    this.scrollPositionService.showTransparency.subscribe(r => this.showTransparency = r)
    this.cartService._cart.subscribe(res => this.cart = res)
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
  
}
