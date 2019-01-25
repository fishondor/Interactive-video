import {
  ComponentFactoryResolver,
  Injectable,
  Inject,
  ComponentRef,
  ReflectiveInjector
} from '@angular/core'

import { TrackingPixelComponent } from '../components/tracking-pixel/tracking-pixel.component';

import {
  VIDEO_START_TRACKING_URL,
  VIDEO_ENDED_TRACKING_URL
} from '../globals/endpoints';

const EVENTS = {
  VIDEO_STARTED: VIDEO_START_TRACKING_URL,
  VIDEO_ENDED: VIDEO_ENDED_TRACKING_URL
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private factoryResolver: ComponentFactoryResolver;
  private rootViewContainer;
  public componentRef: ComponentRef<any>;

  static ANALYTICS_EVENTS = EVENTS

  constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addTrackingPixelComponent() {
    const factory = this.factoryResolver
                        .resolveComponentFactory(TrackingPixelComponent)
    this.componentRef = factory
      .create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(this.componentRef.hostView)
  }

  trackEvent(event){
    if(!this.componentRef)
      this.addTrackingPixelComponent();
    this.componentRef.instance.trackingUrl = event;
  }

}
