import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { pluck, switchMap, delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'tg-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

  public tripId;
  public tripPosts$;
  public images$;
  public todos$;

  constructor(private router: ActivatedRoute,
              private ts: TripsService) {

    // Attention - no need to unsubscribe from route params, router do it by itself
    this.router.params.pipe(pluck('id')).subscribe(id => {
      this.tripId = id || null;

      this.tripPosts$ = this.ts.selectTrip(this.tripId).pipe(
        switchMap(() => this.ts.getPosts())
      );

      this.images$ = this.ts.getTripImages(this.tripId);

      this.todos$ = this.ts.getTripTodos(this.tripId);
    });

  }

  ngOnInit(): void {
  }

}
