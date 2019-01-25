import { Action } from './action';
import { MockDataService } from '../providers/mock-data.service';

describe('Action', () => {

  var actionProps;

  beforeAll(async () => {
    actionProps = await new MockDataService().getAd().actions[0];
  });

  it('should create an instance', () => {
    expect(new Action(actionProps)).toBeTruthy();
  });
});
