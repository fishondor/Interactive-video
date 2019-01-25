import { TestBed } from '@angular/core/testing';
import { DeviceDetectorService } from 'ngx-device-detector';

import { DeviceService } from './device.service';

describe('DeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DeviceDetectorService
    ]
  }));

  it('should be created', () => {
    const service: DeviceService = TestBed.get(DeviceService);
    expect(service).toBeTruthy();
  });
});
