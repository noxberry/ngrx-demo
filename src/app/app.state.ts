import { Item, defaultItem } from './box/item/item.interface';
import { ActionReducerMap } from '@ngrx/store';
import { itemReducer } from './box/item/item.reducer';
import { ItemEffects } from './box/item/item.effects';


export interface AppState {
    item: Item[];
}


export const initialState: AppState = {
    item: [defaultItem]
}


export const effects: Array<any> = [
    ItemEffects
]


export const reducers: ActionReducerMap<AppState> = {
    item: itemReducer
}