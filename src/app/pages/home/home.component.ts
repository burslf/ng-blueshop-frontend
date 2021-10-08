import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'
import { ScrollPositionService } from 'src/app/services/scrollPosition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // host: {'class': 'home-cntr'}
})
export class HomeComponent implements OnInit, AfterViewInit{
  // @ViewChild("dialogContentForScroll") dialogContent: ElementRef;
  @ViewChild('destinationRef', {static: true}) _destinationRef: ElementRef;

  constructor(private scrollPosition: ScrollPositionService) {
   }

  ngOnInit(): void {
    fromEvent(this._destinationRef.nativeElement, 'scroll')
    .subscribe((e:any) => {
      if (e.target.scrollTop > 150) {
        this.scrollPosition.showTransparency.next(false)
        this.scrollPosition.pictureName.next('june-logo.png')
      }else {
        this.scrollPosition.showTransparency.next(true)
        this.scrollPosition.pictureName.next('june-logo-white.png')
      }
    })
  }

  ngAfterViewInit(): void {

  
  }


}
