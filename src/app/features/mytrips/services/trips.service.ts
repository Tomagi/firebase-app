import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Trip } from '../models/trip.model';
import { Post } from '../models/post.model';
import { TransportationType } from '../models/transportation.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TripsService {

  private allTrips: Trip[] = [
    {
      cover: 'assets/trips/trip1.jpg',
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      name:'paris - here we come!',
      locations: [],
      transportation: [
        { type:TransportationType.FLIGHT,
          startDateTime: new Date(),
          endDateTime: new Date(),
          origin:'',
          destination:''}
      ]
    },

    {
      cover: 'assets/trips/trip2.jpg',
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      name:'there\'s no place like italy',
      locations: [],
      transportation: [
        { type:TransportationType.FLIGHT,
          startDateTime: new Date(),
          endDateTime: new Date(),
          origin:'',
          destination:''}
      ]
    },

    {
      cover: 'assets/trips/trip3.jpg',
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      name:'it\'s time for jerusalem',
      locations: [],
      transportation: [
        { type:TransportationType.FLIGHT,
          startDateTime: new Date(),
          endDateTime: new Date(),
          origin:'',
          destination:''}
      ]
    },

    {
      cover: 'assets/trips/trip4.png',
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      name:'iceland',
      locations: [],
      transportation: [
        { type:TransportationType.FLIGHT,
          startDateTime: new Date(),
          endDateTime: new Date(),
          origin:'',
          destination:''}
      ]
    },

    {
      cover: 'assets/trips/trip2.jpg',
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      name:'there\'s no place like italy',
      locations: [],
      transportation: [
        { type:TransportationType.FLIGHT,
          startDateTime: new Date(),
          endDateTime: new Date(),
          origin:'',
          destination:''}
      ]
    },

    {
      cover: 'assets/trips/trip3.jpg',
      id: '1',
      startDate: new Date(),
      endDate: new Date(),
      name:'it\'s time for jerusalem',
      locations: [],
      transportation: [
        { type:TransportationType.FLIGHT,
          startDateTime: new Date(),
          endDateTime: new Date(),
          origin:'',
          destination:''}
      ]
    },
  ];

  constructor(private http: HttpClient) {
  }

  getUserTrips(userID: string): Observable<Trip[]> {
    return of(this.allTrips);
  }

  selectTrip(tripID: string): Observable<Trip> {
    let relevantTrip = this.allTrips.find(f => f.id === tripID);
    return of(relevantTrip);
  }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`).pipe(
      map(m => m.slice(0,10))
    );
  }

  getTripImages(tripID: string) {
    return this.http.get<Post[]>(`${environment.apiUrl}/photos`).pipe(
      map(m => m.slice(0,3)),
      tap(photos => console.log('photos', photos))
    );
  }
}
