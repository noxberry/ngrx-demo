import { Passenger } from "./passenger.interface";
import * as PassengerActions from './passenger.actions';




export function passengerReducer(
    state: Passenger[] = [], 
    action: PassengerActions.Actions
) {
    switch(action.type) {


        /**
         * list passengers
         */
        case PassengerActions.PASSENGER_LIST_DONE:
            return state.concat(action.payload);


        /**
         * add one passenger
         */
        case PassengerActions.PASSENGER_ADD:
            return [...state, action.payload];


        /**
         * remove one passenger
         */
        case PassengerActions.PASSENGER_REMOVE:
            return state.filter(row => row.id != action.payload);
        

        default:
            return state; 
    }
}