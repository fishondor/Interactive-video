import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoAdComponent } from './pages/video-ad/video-ad.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { DynamicActionComponentComponent } from './components/dynamic-action-component/dynamic-action-component.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { TrackingPixelComponent } from './components/tracking-pixel/tracking-pixel.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoAdComponent,
    ActionButtonComponent,
    DynamicActionComponentComponent,
    IconButtonComponent,
    TrackingPixelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    ActionButtonComponent,
    TrackingPixelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
