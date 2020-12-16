import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Route } from '../../models/route';
import {
  LocationTranslation,
  TimeOfDay,
  TimeOfDayTranslation
} from 'src/app/enums';

@Component({
  selector: 'app-route-view',
  templateUrl: './route-view.component.html',
  styleUrls: ['./route-view.component.scss']
})
export class RouteViewComponent {

  @Input() public route: Route;
  @Input() public currentIndex: number;

  @Output() public selectLocation: EventEmitter<number> = new EventEmitter();

  public readonly TimeOfDay = TimeOfDay;
  public readonly LocationTranslation = LocationTranslation;
  public readonly TimeOfDayTranslation = TimeOfDayTranslation;

  public getClassesForLocation(index: number): string[] {
    const classNames = [];

    if (index === this.currentIndex) {
      classNames.push('app-route-view__location--active');
    }

    switch (this.route.getDayTimeForStop(index)) {
      case TimeOfDay.Day:
        classNames.push('app-route-view__location--day');
        break;

      case TimeOfDay.Sunset:
        classNames.push('app-route-view__location--sunset');
        break;

      case TimeOfDay.Night:
        classNames.push('app-route-view__location--night');
        break;
    }

    return classNames;
  }
}
