import { Location, LocationTranslation } from '../enums/location';
import { TimeOfDay } from '../enums/time-of-day';

export class Route {
  private readonly TimeOfDayRotation = [ TimeOfDay.Day, TimeOfDay.Sunset, TimeOfDay.Night ];

  constructor(
    public startingTimeOfDay: TimeOfDay,
    public locations: Location[]
  ) {}

  public getDayTimeForStop(stopIndex: number): TimeOfDay {
    if (stopIndex < 0 || stopIndex > 2) {
      throw new RangeError(`Expected stopIndex in getBaitForStop to be 0-2, received ${stopIndex}`);
    }

    return this.TimeOfDayRotation[(this.TimeOfDayRotation.indexOf(this.startingTimeOfDay) + stopIndex) % 3];
  }

  public toString(): string {
    return JSON.stringify(
      this.locations.map((location, i) => [ LocationTranslation.get(location), this.getDayTimeForStop(i) ])
    );
  }
}
