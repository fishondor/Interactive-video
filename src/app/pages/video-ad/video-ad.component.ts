import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AddsService } from '../../providers/adds.service';
import { DeviceService } from '../../providers/device.service';
import { 
  SOUND_ON,
  SOUND_OFF 
} from '../../globals/icons';
import {
  VIDEO_START_TRACKING_URL,
  VIDEO_ENDED_TRACKING_URL
} from '../../globals/endpoints';

import { Ad } from '../../models/ad';
import { Action } from '../../models/action';

import { DynamicActionComponentComponent } from '../../components/dynamic-action-component/dynamic-action-component.component';
import { OnClickCommands } from '../../commands/on-click-commands';

@Component({
  selector: 'app-video-ad',
  templateUrl: './video-ad.component.html',
  styleUrls: ['./video-ad.component.scss']
})

export class VideoAdComponent implements AfterViewInit {
  
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  @ViewChild('actionComponent') actionComponent: DynamicActionComponentComponent;

  private playerNativeElement: HTMLVideoElement;

  private ad: Ad;
  public isReady: boolean = false;
  public actionActive: boolean = false;
  public actionType: string = null;
  public actionClass: string = 'bottom center';
  public videoSrc: string;

  private soundOn: boolean = false;
  public eventTrackingUrl: string = '';

  get iconSound(){
    return this.soundOn ? SOUND_ON : SOUND_OFF;
  }

  constructor(private addsService: AddsService,
              private deviceService: DeviceService){
  }

  ngAfterViewInit(){
    this.playerNativeElement = this.videoPlayer.nativeElement;
    this.addsService.getAd()
      .then(
        ad => {
          this.ad = ad;
          this.initVideo();
        }
      )
  }

  initVideo(){
    this.videoSrc = this.ad.videoUrl;
    this.playerNativeElement.oncanplay = this.videoReady;
    this.playerNativeElement.ontimeupdate = this.timeUpdated;
    this.playerNativeElement.load();
  }

  videoReady = () => {
    this.isReady = true;
  }

  timeUpdated = () => {
    let currentTime = Math.trunc(this.playerNativeElement.currentTime);
    let action = this.ad.getActionForSecond(currentTime);
    if(action !== null)
      this.executeAction(action);
  }

  executeAction = (action: Action) => {
    let onClickCommands = new OnClickCommands(action.onClick, 
                                              this.playerNativeElement, 
                                              this.deviceService.getOs().toLowerCase());
    this.actionActive = true;
    if(action.shouldPauseVideo)
      this.playerNativeElement.pause();
    this.actionClass = action.position;
    this.actionComponent.setText(action.text);
    this.actionComponent.setOnClickListener(
      () => {
        onClickCommands.executeClickAction();
        this.killAction();
      }
    )
    this.startAction(action);
    if(action.timeout.seconds)
      setTimeout(
        () => {
          if(!this.isActionActive())
            return;
          let timeoutCommand = new OnClickCommands(action.timeout.onTimeout,
                                                    this.playerNativeElement, 
                                                    this.deviceService.getOs().toLowerCase());
          timeoutCommand.executeClickAction();
          this.killAction();
        },
        action.timeout.seconds * 1000
      )
  }

  startAction(action){
    this.actionType = action.type;
  }

  killAction(){
    this.actionType = null;
  }

  isActionActive(){
    return this.actionType !== null;
  }

  toggleSound(){
    this.soundOn = !this.soundOn;
  }

  trackPlayig(){
    this.eventTrackingUrl = VIDEO_START_TRACKING_URL;
  }

  trackEnded(){
    this.eventTrackingUrl = VIDEO_ENDED_TRACKING_URL;
  }

}

