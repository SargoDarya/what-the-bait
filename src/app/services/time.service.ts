import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  startWith
} from 'rxjs/operators';
import {
  isEqual,
  startOfDay
} from 'date-fns';

@Injectable()
export class TimeService {

  public currentTime$ = interval(5 * 60 * 1000)
    .pipe(
      startWith(0),
      map(() => new Date())
    );

  public currentDay$ = this.currentTime$
    .pipe(
      map((date: Date) => startOfDay(date)),
      distinctUntilChanged((a, b) => isEqual(a, b)
    )
);
}
