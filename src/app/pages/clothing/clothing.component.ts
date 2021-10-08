import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ScrollPositionService } from 'src/app/services/scrollPosition.service';
import { clothing } from '../../model/clothes'

// Check if path start with '/' and return path without '/'
const path = location.pathname[0] == '/' ? location.pathname.substr(1) : location.pathname

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss'],
  host: {'class': 'clothing'}
})
export class ClothingComponent implements OnInit {
  public products = clothing
  public category:any = null
  constructor(private router: Router, private route: ActivatedRoute, private scrollPosition:ScrollPositionService) {
    this.route.url.subscribe(url => {
      this.category = `${url[1].path}`
      this.products = clothing.filter(p=> p.category == this.category)
      console.log(this.category)
      if(this.category == 'all'){
        this.products = clothing
      }
    })
  }
  
  ngOnInit(): void {
    window.scrollTo(0, 0)
    console.log(this.products)
  }

  productDetails(product:any, category:any) { 
    this.router.navigate([`/collection/${category}/product`], { queryParams: {id: product.id}});
  }
}
