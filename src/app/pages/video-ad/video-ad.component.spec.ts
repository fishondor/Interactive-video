import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceDetectorService } from 'ngx-device-detector';

import { VideoAdComponent } from './video-ad.component';
import { DynamicActionComponentComponent } from '../../components/dynamic-action-component/dynamic-action-component.component'; 
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';
import { TrackingPixelComponent } from '../../components/tracking-pixel/tracking-pixel.component';
import { DeviceService } from '../../providers/device.service';

describe('VideoAdComponent', () => {
  let component: VideoAdComponent;
  let fixture: ComponentFixture<VideoAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VideoAdComponent, 
        DynamicActionComponentComponent,
        IconButtonComponent,
        TrackingPixelComponent 
      ],
      providers: [
        DeviceService,
        DeviceDetectorService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
