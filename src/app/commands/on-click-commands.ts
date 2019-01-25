import { ClickAction } from '../models/action';

export class OnClickCommands {

    constructor(private clickAction: ClickAction, 
        private  playerElement: HTMLVideoElement, 
        private os: string){
    }

    get executeClickAction(){
        return this.onClickFunctions[this.clickAction.type]
    }

    private onClickFunctions = {
        'redirect': () => {
            window.location = this.clickAction.url[this.os];
        },
        'jumpToSecond': () => {
            this.playerElement.currentTime = this.clickAction.jumpToSecond;
            if(this.clickAction.shouldPlayVideo)
                this.playerElement.play();
        },
        'resume': () => {
            this.playerElement.play();
        }
    }

}
