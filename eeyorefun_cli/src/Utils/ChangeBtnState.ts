/**
 * ChangeBtnState
 */
class ChangeBtnState {
    private static _instance:ChangeBtnState;

    constructor() {
        
    }
    public static getInstance():ChangeBtnState{
        if (this._instance==null) {
            this._instance=new ChangeBtnState();
        }
        return this._instance;
    }
    public changState(disObj:egret.DisplayObjectContainer,isEnable:boolean):void{
        
        if (isEnable) {
            disObj.scaleX=disObj.scaleY=1;
        }else{
            disObj.scaleX=disObj.scaleY=0.8;
        }
        disObj.touchEnabled=isEnable;
    }
}