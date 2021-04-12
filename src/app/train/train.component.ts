import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as PassengerActions from './passenger/store/passenger.actions';


@Component({
    selector: 'app-train',
    templateUrl: './train.component.html',
    styleUrls: ['./train.component.scss']
})


export class TrainComponent implements OnInit {
    
    
    constructor(
        private _http: HttpClient,
        private _store: Store<AppState>
    ) { }


    ngOnInit(): void {
        
    }


    public addOnePassenger() {
        this._http.get<any>('https://randomuser.me/api/?nat=us&results=1').subscribe((res: any) => {
            if (res.hasOwnProperty('results')) {
                this._store.dispatch( new PassengerActions.PassengerAdd(
                    res.results.map((row: any) => {
                        return {
                            id: this._uniqueID(),
                            name: row.name.first + ' ' + row.name.last,
                            age: Math.ceil(Math.random() * 100),
                            seatNumber: Math.ceil(Math.random() * 100)
                        }
                    })[0]
                ));
            }
        })
    }

    
    private _uniqueID() {
        return Math.floor(Math.random() * Date.now())
    }
}
