import { Component, OnInit } from '@angular/core';
import { Passenger } from '../store/passenger.interface';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-train-passenger-details',
    templateUrl: './details.component.html'
})


export class PassengerDetailsComponent implements OnInit {


    public passenger: Passenger;


    constructor(
        private _store: Store<AppState>,
        private _route: ActivatedRoute
    ) {}


    ngOnInit(): void {
        this._route.params.subscribe((params) => {
            if (params.hasOwnProperty('id')) {
                

                this._store.subscribe((store) => {
                    this.passenger = store.passenger.find(row => row.id == params.id);
                })
            }
        })
    }
}
