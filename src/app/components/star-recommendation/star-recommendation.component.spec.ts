import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRecommendationComponent } from './star-recommendation.component';

describe('StarRecommendationComponent', () => {
  let component: StarRecommendationComponent;
  let fixture: ComponentFixture<StarRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
