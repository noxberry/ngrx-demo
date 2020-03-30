import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ItemService } from './item.service';
import * as ItemActions from './item.actions';



@Injectable()
export class ItemEffects {



    constructor(
        private actions$: Actions,
        private _itemService: ItemService
    ) {}

    

    @Effect()
    public initItemRandQnty$ = this.actions$.pipe(


        /**
         * to connect with correct acton type
         */
        ofType(ItemActions.INIT_RAND_ITEM_QNTY),
        switchMap((action: ItemActions.InitRandItemQnty): any => {
            
            
            return this._itemService.randomizeItemQnty().pipe(
                map((res: any) => new ItemActions.DoneRandItemQnty(res))
            )
        })
    );
}