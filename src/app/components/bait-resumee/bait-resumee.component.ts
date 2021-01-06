import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Route } from '../../models/route';
import { BaitRecommendation } from '../../models/static-location-data';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteService } from '../../services/route.service';
import { LocationService } from '../../services/location.service';

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

  recommendedBaits: Set<BaitRecommendation>;
  baits: Set<BaitRecommendation>;
  counts: { bait: BaitRecommendation; count: Number }[];

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.route) {
      this.recommendedBaits = this.getRecommendedBaits(
        changes.route.currentValue
      );
    }
  }
  getRecommendedBaits(route: Route): Set<BaitRecommendation> {
    this.baits = new Set();
    this.counts = [];
    for (let i = 0; i < route.locations.length; i++) {
      const time = route.getDayTimeForStop(i);

      route.locations.forEach(location => {
        let data = this.locationService.getDataForLocation(location);
        this.baits.add(data.main);
        this.counts.push({ bait: data.main, count: this.BAITS_PER_LOCATION });
        if (data.spectral) {
          this.baits.add(data.spectral[time]);
          this.counts.push({
            bait: data.spectral[time],
            count: this.BAITS_PER_CURRENT
          });
        }
      });
    }
    return this.baits;
  }
}
