import { TimeOfDay } from '../enums/time-of-day';
import { Bait, Tug, Weather } from './enums';

export class Fish {
  constructor(
    public translationKey: string,
    public bait: Bait,
    public tug: Tug,
    public score: number,
    public maxHookable: number,
    public weatherConditions: Weather,
    public timeConditions: TimeOfDay,
    public secondRange: [number, number],
    public comment?: string
  ) {}
}
