import { Component, OnInit } from '@angular/core';
import { Passenger } from './store';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PassengerActions from './store/passenger.actions';


@Component({
    selector: 'app-train-passenger',
    templateUrl: './passenger.component.html',
    styleUrls: ['./passenger.component.scss']
})


export class PassengerComponent implements OnInit {


    public passengers: Observable<Passenger[]>;


    constructor(
        private _store: Store<AppState>
    ) {
        this.passengers = _store.select('passenger');
    }


    ngOnInit(): void {
        this._store.dispatch( new PassengerActions.PassengerListLoad());
    }



    public removeOnePassenger(id) {

    }

}
