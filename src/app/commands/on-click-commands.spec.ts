import { TestBed, async } from '@angular/core/testing';
import { ElementRef, Injectable } from '@angular/core';
import { OnClickCommands } from './on-click-commands';
import { MockDataService } from '../providers/mock-data.service';

@Injectable()
export class MockElementRef {
  nativeElement: {}  
}

describe('OnClickCommands', () => {
  var clickAction;
  var playerElement;

  beforeAll(async () => {
    clickAction = await new MockDataService().getAd().actions[0].onClick;
    playerElement = new MockElementRef();
  });

  it('should create an instance', () => {
    console.log("clcik action", clickAction);
    expect(new OnClickCommands(clickAction, playerElement, 'ios')).toBeTruthy();
  });
});
