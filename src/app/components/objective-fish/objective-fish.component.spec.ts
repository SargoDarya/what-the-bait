import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveFishComponent } from './objective-fish.component';

describe('ObjectiveFishComponent', () => {
  let component: ObjectiveFishComponent;
  let fixture: ComponentFixture<ObjectiveFishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectiveFishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
