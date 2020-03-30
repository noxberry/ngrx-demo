import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ItemService {


    randomizeItemQnty(): Observable<any> {
        return new Observable((observer) => {
            setTimeout(() => {

                
                /**
                 * randomize items qnty
                 */
                let qnty = Math.ceil(Math.random() * 10);
                observer.next(qnty);
                observer.complete();
            }, 2000);
        })
    }
}