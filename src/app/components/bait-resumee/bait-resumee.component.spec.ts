import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitResumeeComponent } from './bait-resumee.component';

describe('BaitResumeeComponent', () => {
  let component: BaitResumeeComponent;
  let fixture: ComponentFixture<BaitResumeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitResumeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitResumeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
