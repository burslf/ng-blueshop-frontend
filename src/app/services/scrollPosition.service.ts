import { Directive, ElementRef, Injectable, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ScrollPositionService {
    showTransparency:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
    pictureName:BehaviorSubject<string> = new BehaviorSubject<string>('june-logo-white.png')
    
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.url == '/') {
                    this.showTransparency.next(true)
                    this.pictureName.next('june-logo-white.png')

                }else {
                    this.showTransparency.next(false)
                    this.pictureName.next('june-logo.png')

                }
            }
          })
    }

    keepTrack() {
        const viewHeight = window.innerHeight;
        console.log(viewHeight)
        const element:any = document.querySelector('body')
        console.log(element.getBoundingClientRect())
    }
}