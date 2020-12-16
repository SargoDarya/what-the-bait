import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent {
  private readonly IMAGE_BASE_PATH = '/assets/items/';
  private readonly IMAGE_FILE_SUFFIX = '.png';

  @Input() public set itemName(value: string) {
    const normalisedImage = value.toLowerCase().replace(/ /ig, '_');
    this.resolvedImagePath = `${this.IMAGE_BASE_PATH}${normalisedImage}${this.IMAGE_FILE_SUFFIX}`;
  }

  public resolvedImagePath: string;
}
