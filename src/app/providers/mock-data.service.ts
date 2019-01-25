import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getAd(){
    return {
      url: 'https://ssastatic.s3.amazonaws.com/creatives/irv-mini_golf_king_v2_v1_91476/assets/mini_golf_king.mp4',
      autoPlay: true,
      actions: [
        {
          showOnSecond: 3,
          type: 'button',
          text: "Tap To Hit",
          position: "bottom center",
          shouldPauseVideo: true,
          onClick: {
            type: 'resume',
            url: {
              ios: '',
              android: ''
            },
            jumpToSecond: null,
            shouldPlayVideo: true
          },
          timeout: {
            seconds: 10,
            onTimeout: {
              type: 'jumpToSecond',
              url: {
                ios: '',
                android: ''
              },
              jumpToSecond: 13,
              shouldPlayVideo: true
            }
          }
        },
        {
          showOnSecond: 13,
          type: 'button',
          text: "Download Now",
          position: "bottom center",
          shouldPauseVideo: false,
          onClick: {
            type: 'redirect',
            url: {
              ios: 'https://itunes.apple.com/us/app/mini-golf-king-multiplayer/id1262262200?mt=8',
              android: 'https://play.google.com/store/apps/details?id=com.pnixgames.minigolfking&hl=en'
            },
            jumpToSecond: 13,
            shouldPlayVideo: false
          },
          timeout: {
            seconds: 0,
            onTimeout: {
              type: 'jumpToSecond',
              url: {
                ios: '',
                android: ''
              },
              jumpToSecond: 13,
              shouldPlayVideo: false
            }
          }
        }
      ]
    }
  }

}
