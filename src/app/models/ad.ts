import { Action, ActionProps } from './action';

interface AdProps {
    url: string,
    autoPlay: boolean,
    actions: Array<ActionProps>
}

export class Ad {
    private _videoUrl: string;
    private _actions: Array<Action>;
    private _executedActions: Array<Action> = new Array;
    private _autoPlay: boolean;

    constructor(props: AdProps){
        this._videoUrl = props.url;
        this._actions = Action.fromJSONArray(props.actions);
        this._autoPlay = props.autoPlay;
    }

    get videoUrl(): string{
        return this._videoUrl
    }

    get autoPlay(): boolean{
        return this._autoPlay;
    }

    getActionForSecond(second: number): Action{
        if(!Number.isInteger(second))
            throw new Error("getActionForSecond expects first argument to be integer");
        
        for(let i = 0; i < this._actions.length; i++){
            if(this._actions[i].shouldDisplayOnSecond(second)){
                let action = this._actions[i];
                this._actions.splice(i, 1);
                this._executedActions.push(action);
                return action
            }
        }
        return null;
    }

}
