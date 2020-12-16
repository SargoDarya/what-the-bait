import { Bait, FishType, Location, TimeOfDay, Weather } from '../enums';

export interface FishDescription {
  name: string;
  preferredBait: Bait;
  tug: number;
  minBiteTime: number;
  maxBiteTime: number;
  badWeather: Weather[];
  points: number;
  dhBonus: number;
  onlyDuringSpectral: boolean;
  triggersSpectral: boolean;
  type: FishType | null;
  intuition: boolean;
}

export interface BaitRecommendation {
  bait: Bait;
  fish: FishDescription[];
}

export interface StaticLocationData {
  location: Location;
  main: BaitRecommendation;
  spectral: {
    [ TimeOfDay.Day ]: BaitRecommendation,
    [ TimeOfDay.Sunset ]: BaitRecommendation,
    [ TimeOfDay.Night ]: BaitRecommendation
  };
  objectiveFish: FishDescription[];
}
