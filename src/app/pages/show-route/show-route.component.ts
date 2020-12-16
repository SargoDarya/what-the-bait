import { Component } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest
} from 'rxjs';
import { map } from 'rxjs/operators';
import { Route } from '../../models/route';
import { Location } from '../../enums';
import { StaticLocationData } from '../../models/static-location-data';
import { RouteService } from '../../services/route.service';
import { LocationService } from '../../services/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-route',
  templateUrl: './show-route.component.html',
  styleUrls: ['./show-route.component.scss']
})
export class ShowRouteComponent {

  public selectedRouteId$ = this.activatedRoute.paramMap
    .pipe(
      map((params) => parseInt(params.get('id'), 10))
    );

  public route$ = this.selectedRouteId$
    .pipe(
      map((routeId) => this.routeService.getRouteFromRouteId(routeId))
    );

  public timeOfRoute$ = this.selectedRouteId$.pipe(
    map((routeId) => this.routeService.getDateForRouteId(routeId))
  );

  public currentStopSource = new BehaviorSubject(0);
  public currentStopIndex$ = this.currentStopSource.asObservable()
    .pipe(map((value) => Math.max(Math.min(value, 2), 0)));

  public selectedLocation$ =
    combineLatest([this.route$, this.currentStopIndex$])
      .pipe(
        map(([route, stopIndex]: [ Route, number ]) => route.locations[ stopIndex ])
      );

  public timeOfDay$ =
    combineLatest([this.route$, this.currentStopIndex$])
      .pipe(
        map(([route, stopIndex]: [ Route, number ]) => route.getDayTimeForStop(stopIndex))
      );

  public currentStaticLocationData$ =
    this.selectedLocation$.pipe(
      map((location: Location) => this.locationService.getDataForLocation(location))
    );

  public currentMainBaitRecommendations$ =
    this.currentStaticLocationData$.pipe(
      map((staticLocationData: StaticLocationData) => staticLocationData.main)
    );

  public currentSpectralBaitRecommendations$ =
    combineLatest([this.timeOfDay$, this.currentStaticLocationData$])
      .pipe(
        map(([timeOfDay, staticLocationData]) => staticLocationData.spectral[ timeOfDay ])
      );

  public currentObjectiveFish$ =
    this.currentStaticLocationData$.pipe(
      map((staticLocationData: StaticLocationData) => staticLocationData.objectiveFish)
    );

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly routeService: RouteService,
    private readonly locationService: LocationService) {}

}
