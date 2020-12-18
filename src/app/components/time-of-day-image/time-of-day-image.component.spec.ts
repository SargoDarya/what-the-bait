import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOfDayImageComponent } from './time-of-day-image.component';

describe('TimeOfDayImageComponent', () => {
  let component: TimeOfDayImageComponent;
  let fixture: ComponentFixture<TimeOfDayImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOfDayImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOfDayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
