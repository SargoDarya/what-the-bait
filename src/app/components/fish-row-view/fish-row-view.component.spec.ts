import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishRowViewComponent } from './fish-row-view.component';

describe('FishRowViewComponent', () => {
  let component: FishRowViewComponent;
  let fixture: ComponentFixture<FishRowViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishRowViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishRowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
