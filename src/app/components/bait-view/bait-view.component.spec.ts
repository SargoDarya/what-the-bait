import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitViewComponent } from './bait-view.component';

describe('BaitViewComponent', () => {
  let component: BaitViewComponent;
  let fixture: ComponentFixture<BaitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
