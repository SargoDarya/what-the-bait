import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../models/route';
import { BaitRecommendation } from '../../models/static-location-data';

@Component({
  selector: 'app-bait-resumee',
  templateUrl: './bait-resumee.component.html',
  styleUrls: ['./bait-resumee.component.scss']
})
export class BaitResumeeComponent implements OnInit {
  constructor() {}
  @Input() route: Route;
  recommendedBaits: BaitRecommendation[];

  // recommendedBaits: BaitRecommendation[];

  ngOnInit(): void {}
}
