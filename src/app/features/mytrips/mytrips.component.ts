import { Component, OnInit } from '@angular/core';
import { Trip } from './models/trip.model';
import { TransportationType } from './models/transportation.model';
import { TripsService } from './services/trips.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'tg-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.scss']
})
export class MytripsComponent implements OnInit {

  public userTrips$;

  constructor(private tripsService: TripsService,
              private authService: AuthService) {

  }

  ngOnInit(): void {
    this.userTrips$ = this.authService.currentUser$.pipe(
      switchMap(user => {
        return user ? this.tripsService.getUserTrips(user.uid) : of([]);
      })
    );
  }

}
