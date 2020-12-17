import {
  Component,
  Input
} from '@angular/core';
import { FishDescription } from '../../models/static-location-data';
import { BaitTranslation } from 'src/app/enums';

@Component({
  selector: 'app-objective-fish',
  templateUrl: './objective-fish.component.html',
  styleUrls: ['./objective-fish.component.scss']
})
export class ObjectiveFishComponent {
  @Input() fish: FishDescription[];

  public readonly BaitTranslation = BaitTranslation;
}
