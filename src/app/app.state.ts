import { Item, defaultItem } from './box/item/item.interface';
import { ActionReducerMap } from '@ngrx/store';
import { itemReducer } from './box/item/item.reducer';
import { ItemEffects } from './box/item/item.effects';
import { Passenger, passengerReducer, PassengerEffects } from './train/passenger/store';



export interface AppState {
    item: Item[];
    passenger: Passenger[];
}


export const initialState: AppState = {
    item: [defaultItem],
    passenger: []
}


export const effects: Array<any> = [
    ItemEffects,
    PassengerEffects
]


export const reducers: ActionReducerMap<AppState> = {
    item: itemReducer,
    passenger: passengerReducer
}