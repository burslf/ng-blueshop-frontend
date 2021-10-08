import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  host: {'class' : 'app-carousel'}
})
export class CarouselComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
