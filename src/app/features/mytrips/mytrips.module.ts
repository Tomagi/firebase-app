import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytripsRoutingModule } from './mytrips-routing.module';
import { MytripsComponent } from './mytrips.component';
import { TripComponent } from './trip/trip.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './post/post.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';


@NgModule({
  declarations: [MytripsComponent, TripComponent, TimelineComponent, PostComponent, TripDetailsComponent],
  imports: [
    CommonModule,
    MytripsRoutingModule,
  ]
})
export class MytripsModule { }
