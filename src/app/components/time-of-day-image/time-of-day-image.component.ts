import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges
} from '@angular/core';
import { TimeOfDay } from '../../enums';

@Component({
  selector: 'app-time-of-day-image',
  template: `<img [src]="imageSource" />`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeOfDayImageComponent implements OnChanges {
  private readonly BASE_IMAGE_PATH = '/assets/ui/';
  private readonly IMAGE_SUFFIX = '.png';

  @Input() public timeOfDay: TimeOfDay;
  @Input() public isActive = false;

  public imageSource: string;

  public ngOnChanges(): void {
    this.imageSource = this.getImageSource(this.timeOfDay, this.isActive);
  }

  private getImageSource(timeOfDay: TimeOfDay, isActive: boolean): string {
    const suffix = isActive ? 'Active' : 'Inactive';
    let timeOfDayString: string;

    switch (timeOfDay) {
      case TimeOfDay.Day:
        timeOfDayString = `Day`;
        break;
      case TimeOfDay.Sunset:
        timeOfDayString = `Sunset`;
        break;
      case TimeOfDay.Night:
        timeOfDayString = `Night`;
        break;
    }

    return `${this.BASE_IMAGE_PATH}${timeOfDayString}_${suffix}${this.IMAGE_SUFFIX}`;
  }
}
