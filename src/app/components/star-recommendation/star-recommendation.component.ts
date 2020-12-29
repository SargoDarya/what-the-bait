import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-star-recommendation',
  templateUrl: './star-recommendation.component.html',
  styleUrls: ['./star-recommendation.component.scss']
})
export class StarRecommendationComponent {

  @Input() public set points(points) {
    for (let i = 0; i < this.pointThresholds.length; i++) {
      if (this.pointThresholds[ i ] < points) {
        this.visibleStars = i;
      }
    }
  }

  public visibleStars: number;

  private readonly pointThresholds = [
    0,
    11000,
    13000,
    15000,
    17000
  ];

  public readonly rankMeanings = [
    'Ignore',
    'Possible',
    'Good chance',
    'Recommended',
    'Highly recommended'
  ];

}
