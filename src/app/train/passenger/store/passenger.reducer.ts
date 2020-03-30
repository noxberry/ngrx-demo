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
        

        default:
            return state; 
    }
}