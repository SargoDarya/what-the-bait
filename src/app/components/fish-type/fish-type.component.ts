import {
  Component,
  Input
} from '@angular/core';
import { FishType } from '../../enums';

@Component({
  selector: 'app-fish-type',
  template: `<img [src]="imageSrc" />`,
  styleUrls: ['./fish-type.component.scss']
})
export class FishTypeComponent {
  private readonly IMAGE_BASE_PATH = 'assets/ui/';
  private readonly IMAGE_SUFFIX = '.png';

  @Input() public set fishType(fishType: FishType) {
    this.imageSrc = `${this.IMAGE_BASE_PATH}${this.getImageNameFromFishType(fishType)}${this.IMAGE_SUFFIX}`;
  }

  public imageSrc = '';

  private getImageNameFromFishType(fishType: FishType): string {
    switch (fishType) {
      case FishType.Boxfish: return 'Boxfish';
      case FishType.Crab: return 'Crab';
      case FishType.Jellyfish: return 'Jellyfish';
      case FishType.Manta: return 'Manta';
      case FishType.Octopus: return 'Octopus';
      case FishType.Shark: return 'Shark';
      case FishType.Seadragon: return 'Seadragon';
    }
  }
}
