import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private deviceDetectorService: DeviceDetectorService) { }

  getOs(){
    return this.deviceDetectorService.os;
  }

}
