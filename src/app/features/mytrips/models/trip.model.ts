import { TripLocation } from './location.model';
import { Transportation } from './transportation.model';

export interface Trip {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  locations: Array<TripLocation>;
  transportation: Array<Transportation>;
  cover: string;
}
