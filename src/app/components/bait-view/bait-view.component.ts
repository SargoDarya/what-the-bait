import { Component, Input } from '@angular/core';
import { BaitRecommendation } from '../../models/static-location-data';
import { BaitTranslation } from '../../enums';

@Component({
  selector: 'app-bait-view',
  templateUrl: './bait-view.component.html',
  styleUrls: ['./bait-view.component.scss']
})
export class BaitViewComponent {
  @Input() public isSpectral: boolean;
  @Input() public baitRecommendation: BaitRecommendation;

  public readonly BaitTranslation = BaitTranslation;

  public getVisualTug(tug: number): string {
    switch (tug) {
      case 1: return '!';
      case 2: return '!!';
      case 3: return '!!!';
    }
  }
}
