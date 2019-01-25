import { Injectable } from '@angular/core';

import { Ad } from '../models/ad';

import { MockDataService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class AddsService {

  constructor(private mockData: MockDataService) { }

  getAd(): Promise<Ad>{
    return new Promise(
      (resolve, reject) => {
        let add = new Ad(this.mockData.getAd())
        resolve(add);
      }
    )
  }

}
