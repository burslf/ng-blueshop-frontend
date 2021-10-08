import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app--admin-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  host: {'class' : 'app-admin-products'}
})
export class AdminProductsComponent implements OnInit {

  ngOnInit(): void {
  }

}
