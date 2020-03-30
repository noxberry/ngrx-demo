import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ItemActions from './item/item.actions';


@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})


export class BoxComponent implements OnInit {


    constructor(
        private _store: Store<AppState>
    ) {}


    ngOnInit(): void {
        this._store.dispatch(new ItemActions.ListItem([
            { id: 11, name: 'Listed item', qnty: 1},
            { id: 12, name: 'Listed item', qnty: 1},
            { id: 14, name: 'Listed item', qnty: 1},
            { id: 15, name: 'Listed item', qnty: 1},
            { id: 16, name: 'Listed item', qnty: 1}
        ]));
    }


    /**
     * add new static item
     */
    public addItem() {
        this._store.dispatch(new ItemActions.AddItem(
            { 
                id: Math.ceil(Math.random() * 10), 
                name: 'Some item name', 
                qnty: 1 
            }
        ));
    }


    /**
     * 
     * @param key 
     * sort items by any key
     */
    public sortItems(key: string) {
        this._store.dispatch(new ItemActions.SortItem(key));
    }


    /**
     * add new static item
     */
    public InitRandQnty() {
        this._store.dispatch(new ItemActions.InitRandItemQnty());
    }
}

