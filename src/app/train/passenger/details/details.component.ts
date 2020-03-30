import { Component, OnInit } from '@angular/core';
import { Passenger } from '../store/passenger.interface';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-train-passenger-details',
    templateUrl: './details.component.html'
})


export class PassengerDetailsComponent implements OnInit {


    public passenger: Passenger;


    private _subs: Subscription[];


    constructor(
        private _store: Store<AppState>,
        private _route: ActivatedRoute
    ) {
        this._subs = [];
    }


    ngOnInit(): void {
        this._subs.push(
            this._route.params.subscribe((params) => {
                if (params.hasOwnProperty('id')) {
                    this._fetchPassenger(params.id);
                }
            })
        );
    }


    private _fetchPassenger(id) {
        this._subs.push(
            this._store.subscribe((store) => {
                this.passenger = store.passenger.find(row => row.id == id);
            })
        );
    }


    /**
     * unsubscribe
     */
    ngOnDestroy() {
        this._subs.forEach((sub: any) => sub.unsubscribe());
    }
}
