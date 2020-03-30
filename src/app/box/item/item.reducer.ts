import * as ItemActions from './item.actions';
import { Item, defaultItem } from './item.interface';


export function itemReducer(state: Item[] = [defaultItem], action: ItemActions.Actions): Item[] {
    switch(action.type) {


        case ItemActions.LIST_ITEM:
            return state.concat(action.payload);


        case ItemActions.ADD_ITEM:
            return [...state, action.payload];


        case ItemActions.REMOVE_ITEM:
            return state.filter(row => row.id != action.payload);


        case ItemActions.SORT_ITEM:
            return state.slice().sort((a, b) => {
                if (a[action.payload] < b[action.payload]) {
                    return -1;
                }
                if (a[action.payload] > b[action.payload]) {
                    return 1;
                }
                return 0;
            });


        case ItemActions.DONE_RAND_ITEM_QNTY:
            let items = JSON.parse(JSON.stringify(state));
            return items.map((item: Item) => {
                item.qnty = action.payload;
                return item;
            });
            
        
        default:
            return state;
    }
}