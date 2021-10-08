import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  host: {'class' : 'app-new-product'}
})
export class NewProductComponent implements OnInit {
  public productForm:FormGroup
  @ViewChild('uploadPicture') uploadPicture:ElementRef
  get sizes() {
    return this.productForm.get('sizes') as FormArray
  }
    
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      sku: [''],
      title: [''],
      category: [null, Validators.required],
      picture: [null],
      description: [null],
      price:[null],
      sizes: this.fb.array([]),
      colors: this.fb.array([])
      
    })
  }
  ngOnInit(): void {
    
  }


}
