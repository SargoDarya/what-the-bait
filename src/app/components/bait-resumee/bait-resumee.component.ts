import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Route } from '../../models/route';
import { BaitRecommendation } from '../../models/static-location-data';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouteService } from '../../services/route.service';
import { LocationService } from '../../services/location.service';
import { BaitTranslation, Bait } from '../../enums';
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
  private BAITS_PER_CURRENT = 15;
  public readonly BaitTranslation = BaitTranslation;
  baitRecommendations: BaitRecommendation[];
  baits: Set<number>;
  counts = new Array<{ bait: Bait; count: number }>();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.route) {
      this.calculateRecommendedBaits(changes.route.currentValue);
    }
  }
  getCount(baitId: number) {
    let sum = 0;
    this.counts
      .filter(count => {
        return count.bait === baitId;
      })
      .map(count => {
        sum += count.count;
      });
    return sum;
  }
  calculateRecommendedBaits(route: Route): void {
    this.baits = new Set<number>();
    this.counts = [];
    for (let i = 0; i < route.locations.length; i++) {
      let location = route.locations[i];
      const time = route.getDayTimeForStop(i);
      let data = this.locationService.getDataForLocation(location);
      this.baits.add(data.main.bait);
      this.counts.push({
        bait: data.main.bait,
        count: this.BAITS_PER_LOCATION
      });
      if (data.spectral) {
        this.baits.add(data.spectral[time].bait);
        this.counts.push({
          bait: data.spectral[time].bait,
          count: this.BAITS_PER_CURRENT
        });
      }
    }
  }
}
