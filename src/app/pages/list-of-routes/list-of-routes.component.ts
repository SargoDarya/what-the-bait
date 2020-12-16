import { Component } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { TimeService } from '../../services/time.service';
import {
  map
} from 'rxjs/operators';
import { format } from 'date-fns';
import { LocationTranslation } from 'src/app/enums';

@Component({
  selector: 'app-list-of-routes',
  templateUrl: './list-of-routes.component.html',
  styleUrls: ['./list-of-routes.component.scss']
})
export class ListOfRoutesComponent {

  public nextRoutes$ = this.timeService.currentTime$.pipe(
    map((currentDay) => {
      const routeId = this.routeService.getRouteIdFromTime(currentDay);

      return Array.from({ length: 12 }).map((_, i) => {
        return {
          id: routeId + i,
          route: this.routeService.getRouteFromRouteId(routeId + i),
          time: this.routeService.getDateForRouteId(routeId + i)
        };
      });
    })
  );

  public readonly LocationTranslation = LocationTranslation;

  constructor(
    private readonly routeService: RouteService,
    private readonly timeService: TimeService
  ) {}

  public formatDate(date: Date): string {
    return format(date, 'd/M HH:mm');
  }
}
