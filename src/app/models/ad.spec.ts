import { Ad } from './ad';
import { MockDataService } from '../providers/mock-data.service';

describe('Ad', () => {

  var adProps;

  beforeAll(async () => {
    adProps = await new MockDataService().getAd();
  });

  it('should create an instance', () => {
    expect(new Ad(adProps)).toBeTruthy();
  });
});
