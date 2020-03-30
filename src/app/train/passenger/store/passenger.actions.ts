import { Action } from '@ngrx/store';
import { Passenger } from './passenger.interface';


export const PASSENGER_LIST_LOAD = '[PASSENGER] List Load';
export const PASSENGER_LIST_DONE = '[PASSENGER] List Done';
export const PASSENGER_ADD = '[PASSENGER] Add';
export const PASSENGER_REMOVE = '[PASSENGER] Remove';


export class PassengerListLoad implements Action {
    readonly type = PASSENGER_LIST_LOAD;
    constructor() {}
}


export class PassengerListDone implements Action {
    readonly type = PASSENGER_LIST_DONE;
    constructor(
        public payload: Passenger[]
    ) {}
}


export class PassengerAdd implements Action {
    readonly type = PASSENGER_ADD;
    constructor(
        public payload: Passenger
    ) {}
}


export class PassengerRemove implements Action {
    readonly type = PASSENGER_REMOVE;
    constructor(
        public payload: number
    ) {}
}


export type Actions = PassengerListLoad | PassengerListDone | PassengerAdd | PassengerRemove;

