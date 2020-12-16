import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent {
  @Input() public isMenuVisible: boolean;

  @Output() public showMenu: EventEmitter<boolean> = new EventEmitter();
}
