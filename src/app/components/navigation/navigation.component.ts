import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  @HostBinding('class.visible')
  public forceVisible: boolean;

  @Output() public closeNavigation: EventEmitter<void> = new EventEmitter();

  @HostListener('click')
  public clickOnBackground(): void {
    this.closeNavigation.emit();
  }
}
