import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Route } from '../../models/route';
import { BaitRecommendation } from '../../models/static-location-data';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteService } from '../../services/route.service';
import { LocationService } from '../../services/location.service';
import { BaitTranslation } from '../../enums';
@Component({
  selector: 'app-bait-resumee',
  templateUrl: './bait-resumee.component.html',
  styleUrls: ['./bait-resumee.component.scss']
})
export class BaitResumeeComponent implements OnInit {
  constructor(
    private routeService: RouteService,
    private locationService: LocationService
  ) {}
  @Input() route: Route;
  private BAITS_PER_LOCATION = 20;
  private BAITS_PER_CURRENT = 20;
  public readonly BaitTranslation = BaitTranslation;

  recommendedBaits: Set<Number>;
  baits: Set<Number>;
  counts: { bait: BaitRecommendation; count: Number }[];

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.route) {
      this.recommendedBaits = this.getRecommendedBaits(
        changes.route.currentValue
      );
    }
  }
  getRecommendedBaits(route: Route): Set<Number> {
    let baits = new Set<number>();
    let counts = [];
    for (let i = 0; i < route.locations.length; i++) {
      const time = route.getDayTimeForStop(i);

      route.locations.forEach(location => {
        let data = this.locationService.getDataForLocation(location);
        baits.add(data.main.bait);
        counts.push({ bait: data.main, count: this.BAITS_PER_LOCATION });
        if (data.spectral) {
          baits.add(data.spectral[time].bait);
          counts.push({
            bait: data.spectral[time],
            count: this.BAITS_PER_CURRENT
          });
        }
      });
    }
    return baits;
  }
}
