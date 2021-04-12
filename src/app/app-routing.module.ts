import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { TrainComponent } from './train/train.component';
import { PassengerDetailsComponent } from './train/passenger/details/details.component';


const routes: Routes = [
    { 
        path: '', 
        redirectTo: 'train', 
        pathMatch: 'full' 
    },
    {
        path: 'box',
        component: BoxComponent
    },
    {
        path: 'train',
        component: TrainComponent,
        children: [
            { path: 'passenger-details/:id', component: PassengerDetailsComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
