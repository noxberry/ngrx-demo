import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ItemActions from './item/item.actions';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.scss']
})


export class BoxComponent implements OnInit {


    constructor(
        private _store: Store<AppState>,
        private _http: HttpClient
    ) {}


    ngOnInit(): void {
        this._http.get('https://randomuser.me/api/?nat=us&results=7').subscribe((res: any) => {
            this._store.dispatch(new ItemActions.ListItem(
                res.results.map((row: any) =>  {
                    return {
                        id: Math.ceil(Math.random() * 10),
                        name: row.name.first + ' ' + row.name.last,
                        qnty: 1
                    }
                })    
            ));
        })
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

