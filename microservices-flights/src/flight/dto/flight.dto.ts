export class FlightDTO {
  readonly id?:string;
  readonly pilot: string;
  readonly airplane: string;
  readonly destinationCity: string;
  readonly flightDate: Date;
}
