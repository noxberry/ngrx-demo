import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as PassengerActions from './passenger.actions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PassengerEffects {



    constructor(
        private _actions$: Actions,
        private _http: HttpClient
    ) {}

    

    @Effect()
    public passengerList$ = this._actions$.pipe(


        /**
         * to connect with correct acton type
         */
        ofType(PassengerActions.PASSENGER_LIST_LOAD),
        switchMap((): any => {
            
            
            return this._http.get('https://randomuser.me/api/?nat=us&results=10').pipe(
                map((res: any) => new PassengerActions.PassengerListDone(
                    res.results.map((row: any) => {
                        return {
                            id: Math.ceil(Math.random() * 100),
                            name: row.name.first + ' ' + row.name.last,
                            age: Math.ceil(Math.random() * 100),
                            seatNumber: Math.ceil(Math.random() * 100)
                        }
                    })
                ))
            )
        })
    );
}