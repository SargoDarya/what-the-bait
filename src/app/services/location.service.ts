import { Injectable } from '@angular/core';
import {
  Location,
  TimeOfDay
} from '../enums';
import {
  FishDescription,
  StaticLocationData
} from '../models/static-location-data';
import { staticLocationData } from '../static-data';

@Injectable()
export class LocationService {
  private locations: Map<Location, StaticLocationData> = new Map();

  constructor() {
    staticLocationData.forEach((locationData) => {
      // Sort fish by points
      locationData.main.fish.sort(this.sortByPossibleScore);
      locationData.spectral[TimeOfDay.Day].fish.sort(this.sortByPossibleScore);
      locationData.spectral[TimeOfDay.Sunset].fish.sort(this.sortByPossibleScore);
      locationData.spectral[TimeOfDay.Night].fish.sort(this.sortByPossibleScore);
      locationData.objectiveFish.sort(this.sortByPossibleScore);
      this.locations.set(locationData.location, locationData);
    });
  }

  getDataForLocation(location: Location): StaticLocationData {
    return this.locations.get(location);
  }

  private sortByPossibleScore(a: FishDescription, b: FishDescription): number {
    return a.dhBonus * a.points * 2 < b.dhBonus * b.points * 2 ? 1 : -1;
  }
}
