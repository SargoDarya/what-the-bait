import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishTypeComponent } from './fish-type.component';

describe('FishTypeComponent', () => {
  let component: FishTypeComponent;
  let fixture: ComponentFixture<FishTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
