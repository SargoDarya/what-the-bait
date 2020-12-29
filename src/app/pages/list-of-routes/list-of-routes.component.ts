import { Component } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { TimeService } from '../../services/time.service';
import {
  map,
  shareReplay
} from 'rxjs/operators';
import {
  addMinutes,
  format,
  formatDuration,
  intervalToDuration
} from 'date-fns';
import { LocationTranslation, TimeOfDayTranslation } from 'src/app/enums';
import {
  combineLatest,
  Observable
} from 'rxjs';
import { Route } from '../../models/route';

@Component({
  selector: 'app-list-of-routes',
  templateUrl: './list-of-routes.component.html',
  styleUrls: ['./list-of-routes.component.scss']
})
export class ListOfRoutesComponent {

  public nextRoutes$: Observable<{ id: number, route: Route, routeScore: number, time: Date }[]> = this.timeService.currentTime$.pipe(
    map((currentDay) => {
      const routeId = this.routeService.getRouteIdFromTime(currentDay);

      return Array.from({ length: 12 }).map((_, i) => {
        const route = this.routeService.getRouteFromRouteId(routeId + i);
        const routeScore = this.routeService.getCalculatedRouteScore(route);

        return {
          id: routeId + i,
          route,
          routeScore,
          time: this.routeService.getDateForRouteId(routeId + i)
        };
      });
    }),
    shareReplay(1)
  );

  public timeLeftForRegistration$ = combineLatest([ this.nextRoutes$, this.timeService.currentTime$ ])
    .pipe(
      map(([ nextRoutes, currentTime ]) => {
        const endOfRegistration = addMinutes(nextRoutes[0].time, 15);

        if (currentTime > endOfRegistration) {
          return `Registration has ended`;
        } else {
          return `Registration ends in: ${formatDuration(intervalToDuration({ end: addMinutes(nextRoutes[0].time, 15), start: currentTime }))}`;
        }
      })
    );

  public registrationStartsIn$ = combineLatest([ this.nextRoutes$, this.timeService.currentTime$ ])
    .pipe(
      map(([ nextRoutes, currentTime ]) => {
        return formatDuration(intervalToDuration({ end: nextRoutes[1].time, start: currentTime }));
      })
    );

  public readonly LocationTranslation = LocationTranslation;
  public readonly TimeOfDayTranslation = TimeOfDayTranslation;

  constructor(
    private readonly routeService: RouteService,
    private readonly timeService: TimeService
  ) {}

  public formatDate(date: Date): string {
    return format(date, 'd/M HH:mm');
  }

  public trackByRouteId(index: number, route: any): number {
    return route.id;
  }
}
