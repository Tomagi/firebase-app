import { Component, OnInit, Input, HostListener, HostBinding } from '@angular/core';
import { Trip } from '../models/trip.model';
import { TransportationType } from '../models/transportation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'tg-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() trip: Trip;

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl(`/mytrips/${this.trip.id}`);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.trip.name
  }

}
