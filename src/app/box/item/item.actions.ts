import { Action } from '@ngrx/store';
import { Item } from './item.interface';


export const LIST_ITEM = '[ITEM] List';
export const ADD_ITEM = '[ITEM] Add';
export const REMOVE_ITEM = '[ITEM] Remove';
export const SORT_ITEM = '[ITEM] Sort';
export const INIT_RAND_ITEM_QNTY = '[ITEM] Init Random Qnty';
export const DONE_RAND_ITEM_QNTY = '[ITEM] Done Random Qnty';


export class ListItem implements Action {
    readonly type = LIST_ITEM;
    constructor(


        /**
         * array of items
         */
        public payload: Item[]
    ) {}
}


export class AddItem implements Action {
    readonly type = ADD_ITEM;
    constructor(


        /**
         * full item object
         */
        public payload: Item
    ) {}
}


export class RemoveItem implements Action {
    readonly type = REMOVE_ITEM;
    constructor(


        /**
         * item id
         */
        public payload: number
    ) {}
}


export class SortItem implements Action {
    readonly type = SORT_ITEM;
    constructor(


        /**
         * key name
         */
        public payload: string
    ) {}
}


export class InitRandItemQnty implements Action {
    readonly type = INIT_RAND_ITEM_QNTY;
    constructor() {}
}


export class DoneRandItemQnty implements Action {
    readonly type = DONE_RAND_ITEM_QNTY;
    constructor(
        public payload: number
    ) {}
}


export type Actions = AddItem | RemoveItem | ListItem | SortItem | InitRandItemQnty | DoneRandItemQnty;