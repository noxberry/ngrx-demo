import { Component, OnInit } from '@angular/core';
import { Passenger } from './store';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PassengerActions from './store/passenger.actions';
import { Router } from '@angular/router';


@Component({
    selector: 'app-train-passenger',
    templateUrl: './passenger.component.html',
    styleUrls: ['./passenger.component.scss']
})


export class PassengerComponent implements OnInit {


    public passengers: Observable<Passenger[]>;


    constructor(
        private _store: Store<AppState>,
        private _router: Router
    ) {
        this.passengers = _store.select('passenger');
    }


    ngOnInit(): void {
        this._store.dispatch( new PassengerActions.PassengerListLoad());
    }


    /**
     * 
     * @param id 
     * remove 1 passenger by id 
     * Also removes matching (since ID is not unique number)
     */
    public removeOnePassenger(id) {
        this._store.dispatch( new PassengerActions.PassengerRemove(id));
    }


    /**
     * 
     * @param id 
     * go to passenger details page
     */
    public passengerDetails(id) {
        this._router.navigate(['/train/passenger-details/' + id]);
    }
}
