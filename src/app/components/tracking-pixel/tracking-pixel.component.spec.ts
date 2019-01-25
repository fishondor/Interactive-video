import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingPixelComponent } from './tracking-pixel.component';

describe('TrackingPixelComponent', () => {
  let component: TrackingPixelComponent;
  let fixture: ComponentFixture<TrackingPixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingPixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingPixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
