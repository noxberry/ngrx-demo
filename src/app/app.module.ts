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


@NgModule({
    declarations: [
        AppComponent,
        BoxComponent,
        ItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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
