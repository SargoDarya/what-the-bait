import { Injectable } from '@angular/core';
import { Route } from '../models/route';
import { Location, TimeOfDay } from '../enums';
import { LocationService } from './location.service';

const TWO_HOURS = 1000 * 60 * 60 * 2;

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

  private routeScores: Map<Route, number> = new Map();

  constructor(
    private locationService: LocationService
  ) {
    this.routes.forEach((route) => {
      this.routeScores.set(route, this.calculatePotentialRouteScore(route));
    });
  }

  public getCalculatedRouteScore(route: Route): number {
    return this.routeScores.get(route);
  }

  /**
   * Returns a date for a given routeId
   */
  public getDateForRouteId(routeId: number): Date {
    return new Date((routeId) * TWO_HOURS);
  }

  public getRouteFromRouteId(routeId: number): Route {
    // align the number that is assigned to the next two hour block to the pattern array
    const offset = 84;
    const targetTime = (routeId + offset) % this.pattern.length;

    const currentPatternIndex = ((targetTime >= this.pattern.length) ? (targetTime - this.pattern.length) : targetTime);
    return this.routes[ this.pattern[ currentPatternIndex ] - 1 ];
  }

  /**
   * Returns a continuous id based on 2 hours increments
   */
  public getRouteIdFromTime(time: Date): number {
    return Math.floor(time.getTime() / TWO_HOURS);
  }

  /**
   * Returns a route from a time
   */
  public getRouteFromTime(time: Date): Route {
    const absoluteRouteId = this.getRouteIdFromTime(time);

    return this.getRouteFromRouteId(absoluteRouteId);
  }

  /**
   * Returns a best case score for the given route.
   */
  private calculatePotentialRouteScore(route: Route): number {
    return route.locations.reduce((acc, location, index) => {
      const timeOfDay = route.getDayTimeForStop(index);

      return acc +  this.getPotentialLocationScoreForTime(location, timeOfDay);
    }, 0);
  }

  /**
   * * Following assumptions are made:
   * - During the spectral current:
   *   - 1 DH goes to the max scoring fish in HQ
   *   - 1 DH goes to the max scoring fish in NQ
   *   - 1 DH goes to the second max scoring fish in NQ if available, otherwise dropped.
   * - Outside of the current
   *   - Alternates between the three top fish
   *   - Hook time rotates through min/max
   *   - Half the fish caught in HQ
   *   - Half the fish are caught in NQ
   */
  private getPotentialLocationScoreForTime(location: Location, time: TimeOfDay): number {
    const scores = [];
    const locationData = this.locationService.getDataForLocation(location);
    const meanAnimationTime = 3;
    const spectralTime = 2 * 60;
    let timeOnStop = 6 * 60 + 30;
    timeOnStop -= spectralTime;

    // Inside current
    const spectralFishes = locationData.spectral[ time ].fish;
    const topSpectralFish = spectralFishes[ 0 ];
    const secondTopSpectralFish = spectralFishes.length > 1 ? spectralFishes[1] : null;

    scores.push(
      topSpectralFish.points * spectralFishes[ 0 ].dhBonus * 2,
      topSpectralFish.points * spectralFishes[ 0 ].dhBonus
    );

    if (secondTopSpectralFish) {
      scores.push(secondTopSpectralFish.points * secondTopSpectralFish.dhBonus);
    }

    // Outside current
    const topMainFishes = locationData.main.fish.slice(0, 2);
    let wasLastFishMinHookTime = false;
    let currentFish = 0;
    let wasLastFishHQ = false;

    while (timeOnStop > 0) {
      const fish = topMainFishes[ currentFish ];
      const fishPoints = fish.points;
      scores.push(wasLastFishHQ ? fishPoints : fishPoints * 2);

      // Update hook time
      timeOnStop -= (wasLastFishMinHookTime ? fish.maxBiteTime : fish.minBiteTime) + meanAnimationTime;
      wasLastFishMinHookTime = !wasLastFishMinHookTime;

      // Update HQ status
      wasLastFishHQ = !wasLastFishHQ;

      // Rotate fish
      currentFish = (currentFish + 1) % topMainFishes.length;
    }

    return scores.reduce((acc, next) => acc + next, 0);
  }
}
