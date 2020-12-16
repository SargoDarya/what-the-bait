import { Injectable } from '@angular/core';
import { TimeService } from './time.service';
import { Route } from '../models/route';
import { Location, TimeOfDay } from '../enums';
import {
  map,
  shareReplay,
  tap
} from 'rxjs/operators';
import { Observable } from 'rxjs';

const TWO_HOURS = 60 * 60 * 2;

@Injectable()
export class RouteService {
  private pattern: number[] = [
    7, 10, 1, 4, 8, 11, 2, 5, 12, 3, 6,
    7, 10, 1, 4, 8, 11, 2, 5, 9, 3, 6,
    7, 10, 1, 4, 8, 11, 2, 5, 9, 12, 6,
    7, 10, 1, 4, 8, 11, 2, 5, 9, 12, 3,
    7, 10, 1, 4, 8, 11, 2, 5, 9, 12, 3, 6,
    10, 1, 4, 8, 11, 2, 5, 9, 12, 3, 6,
    7, 1, 4, 8, 11, 2, 5, 9, 12, 3, 6,
    7, 10, 4, 8, 11, 2, 5, 9, 12, 3, 6,
    7, 10, 1, 8, 11, 2, 5, 9, 12, 3, 6,
    7, 10, 1, 4, 11, 2, 5, 9, 12, 3, 6,
    7, 10, 1, 4, 8, 2, 5, 9, 12, 3, 6,
    7, 10, 1, 4, 8, 11, 5, 9, 12, 3, 6,
    7, 10, 1, 4, 8, 11, 2, 9, 12, 3, 6
  ];

  private routes: Route[] = [
    new Route(TimeOfDay.Night, [Location.SouthernMerlthor, Location.GaladionBay, Location.NorthernMerlthor]),
    new Route(TimeOfDay.Day, [Location.SouthernMerlthor, Location.GaladionBay, Location.NorthernMerlthor]),
    new Route(TimeOfDay.Sunset, [Location.SouthernMerlthor, Location.GaladionBay, Location.NorthernMerlthor]),
    new Route(TimeOfDay.Night, [Location.GaladionBay, Location.SouthernMerlthor, Location.RhotanoSea]),
    new Route(TimeOfDay.Day, [Location.GaladionBay, Location.SouthernMerlthor, Location.RhotanoSea]),
    new Route(TimeOfDay.Sunset, [Location.GaladionBay, Location.SouthernMerlthor, Location.RhotanoSea]),
    new Route(TimeOfDay.Night, [Location.Cieldales, Location.NorthernMerlthor, Location.Bloodbrine]),
    new Route(TimeOfDay.Day, [Location.Cieldales, Location.NorthernMerlthor, Location.Bloodbrine]),
    new Route(TimeOfDay.Sunset, [Location.Cieldales, Location.NorthernMerlthor, Location.Bloodbrine]),
    new Route(TimeOfDay.Night, [Location.Cieldales, Location.RhotanoSea, Location.RothlytSound]),
    new Route(TimeOfDay.Day, [Location.Cieldales, Location.RhotanoSea, Location.RothlytSound]),
    new Route(TimeOfDay.Sunset, [Location.Cieldales, Location.RhotanoSea, Location.RothlytSound]),
  ];

  public getDateForRouteId(absoluteRouteId: number): Date {
    return new Date(absoluteRouteId * TWO_HOURS * 1000);
  }

  public getRouteFromRouteId(absoluteRouteId: number): Route {
    // align the number that is assigned to the next two hour block to the pattern array
    const offset = 88;
    const targetTime = (absoluteRouteId + offset) % this.pattern.length;

    const currentPatternIndex = ((targetTime >= this.pattern.length) ? (targetTime - this.pattern.length) : targetTime);
    return this.routes[ this.pattern[ currentPatternIndex ] - 1 ];
  }

  public getRouteIdFromTime(time: Date): number {
    return Math.floor(time.getTime() / 1000 / TWO_HOURS);
  }

  public getRouteFromTime(time: Date): Route {
    const absoluteRouteId = this.getRouteIdFromTime(time);

    return this.getRouteFromRouteId(absoluteRouteId);
  }
}
