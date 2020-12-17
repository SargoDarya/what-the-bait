import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { FishDescription } from '../../models/static-location-data';

@Component({
  selector: 'app-fish-table-view',
  templateUrl: './fish-table-view.component.html',
  styleUrls: ['./fish-table-view.component.scss']
})
export class FishTableViewComponent {

  @Input() public fishes: FishDescription[];

}
