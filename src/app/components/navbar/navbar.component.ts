import { Component, OnInit } from '@angular/core';
import { Cart, cart } from 'src/app/model/cart';
import { SidenavService } from './sidenav.service';
import { CookieService } from 'ngx-cookie-service'
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  womenCategory: string[] = ['Tops', 'Corsets', 'Dresses', 'Denim', 'Bottoms', 'Sweats', 'Loungewear'];
  constructor(private sidenav: SidenavService, private cookie: CookieService, private cartService: CartService) { 
  }
  public cart:Cart|null = null

  ngOnInit(): void {
    this.cartService._cart.subscribe(res => this.cart = res)
  }
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
