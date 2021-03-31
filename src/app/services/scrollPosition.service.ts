import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ScrollPositionService {
    _position: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    position$ = this._position.asObservable()


    constructor() {
        const bo = document.querySelector('body')
    }
}