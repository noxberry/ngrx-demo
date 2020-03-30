import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ItemComponent } from './box/item/item.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, initialState, effects } from './app.state';
import { ItemService } from './box/item/item.service';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { TrainComponent } from './train/train.component';
import { PassengerComponent } from './train/passenger/passenger.component';
import { PassengerDetailsComponent } from './train/passenger/details/details.component';


@NgModule({
    declarations: [
        AppComponent,
        BoxComponent,
        ItemComponent,
        TrainComponent,
        PassengerComponent,
        PassengerDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        
        StoreModule.forRoot(reducers, {initialState}),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        EffectsModule.forRoot(effects)
    ],
    providers: [
        ItemService
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }
