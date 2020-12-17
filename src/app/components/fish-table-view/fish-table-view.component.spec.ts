import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTableViewComponent } from './fish-table-view.component';

describe('FishTableViewComponent', () => {
  let component: FishTableViewComponent;
  let fixture: ComponentFixture<FishTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
