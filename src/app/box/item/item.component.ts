import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Item } from './item.interface';
import * as ItemActions from './item.actions';


@Component({
    selector: 'app-box-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})


export class ItemComponent implements OnInit {


    public items: Observable<Item[]>;


    constructor(
        private _store: Store<AppState>
    ) {
        this.items = _store.select('item');
    }


    ngOnInit(): void {
        
    }


    public removeItem(id) {
        this._store.dispatch(new ItemActions.RemoveItem(id));
    }
}
