import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import {
  map,
  startWith
} from 'rxjs/operators';

@Injectable()
export class TimeService {

  public currentTime$ =
    interval(1000)
      .pipe(
        startWith(0),
        map(() => new Date())
      );

}
