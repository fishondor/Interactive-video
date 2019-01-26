import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getVideoElement() {
    return element(by.css('.main-container video')).isPresent();
  }
}
