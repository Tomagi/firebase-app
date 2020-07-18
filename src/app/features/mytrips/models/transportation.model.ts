export enum TransportationType {
  FLIGHT = 0,
  TRAIN = 1,
  SHIP = 2,
  BICYCLE = 3,
  SCOOTER = 4
}

export interface Transportation {
  type: TransportationType;
  startDateTime: Date;
  endDateTime: Date;
  origin: string;
  destination: string;
}
