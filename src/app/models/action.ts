export interface ClickAction {
    type: string,
    url: {
        ios: string,
        android: string
    },
    jumpToSecond: number,
    shouldPlayVideo: boolean
}

interface Timeout {
    seconds: number,
    onTimeout: ClickAction
}

export interface ActionProps {
    showOnSecond: number,
    type: string,
    text: string,
    position: string,
    shouldPauseVideo: boolean,
    onClick: ClickAction,
    timeout: Timeout
}

export class Action {

    private second: number;
    private _shouldPauseVideo: boolean;
    private _type: string;
    private _position: string;
    private _text: string;
    private _timeout: Timeout;
    private _onClick: ClickAction;

    constructor(props: ActionProps){
        this.second = props.showOnSecond;
        this._shouldPauseVideo = props.shouldPauseVideo;
        this._type = props.type;
        this._position = props.position;
        this._text = props.text;
        this._timeout = props.timeout;
        this._onClick = props.onClick;
    }

    shouldDisplayOnSecond(second){
        return this.second == second;
    }

    get shouldPauseVideo() {
        return this._shouldPauseVideo;
    }

    get type() {
        return this._type;
    }

    get position() {
        return this._position;
    }

    get text() {
        return this._text;
    }

    get timeout() {
        return this._timeout;
    }

    get onClick() {
        return this._onClick;
    }

    static fromJSONArray(jsonArray): Array<Action>{
        return jsonArray.map(
            action => new Action(action)
        )
    }
}
