import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import { FishDescription } from '../../models/static-location-data';
import { BaitTranslation } from '../../enums';

@Component({
  selector: 'app-fish-row-view',
  templateUrl: './fish-row-view.component.html',
  styleUrls: ['./fish-row-view.component.scss']
})
export class FishRowViewComponent implements OnChanges {
  @Input() public fish: FishDescription;

  @HostBinding('class.triggers-spectral') public triggersSpectral: boolean;

  public readonly BaitTranslation = BaitTranslation;

  public ngOnChanges(): void {
    this.triggersSpectral = this.fish.triggersSpectral;
  }

  public getVisualTug(tug: number): string {
    switch (tug) {
      case 1: return '!';
      case 2: return '!!';
      case 3: return '!!!';
    }
  }
}
