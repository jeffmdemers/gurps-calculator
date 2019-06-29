import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    showMenuIcon: boolean;

    private toggle: Subject<boolean> = new Subject();
    toggleStream$ = this.toggle.asObservable();


    emitToggleEvent(event: boolean) {
        this.toggle.next(event);
    }
}