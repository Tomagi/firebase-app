import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MytripsComponent } from './mytrips.component';
import { TripComponent } from './trip/trip.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';

const routes: Routes = [
  {path: 'timeline', component: TimelineComponent },
    {path: '', component: MytripsComponent },
    {path: ':id', component: TripDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytripsRoutingModule { }
