class BaseUILayer extends eui.Component implements IcallBack {
    public _callBack: Function;
    protected _timeOutList: number[] = [];
    protected _btnList: egret.DisplayObjectContainer[] = [];
    public constructor() {
        super();
    }
    public BaseUILayerGC() {
        this.baseCleanBtnEvent();
        EventManager.getInstance().removeEventListener(EventManager.EVENT_LANG_CHANGE, this.langInit, this);
        this._callBack = null;
    }
    protected addTimeOutID(id: number) {
        this._timeOutList.push(id);
    }
    protected clearAllTimeOut() {
        for (var i in this._timeOutList) {
            egret.clearTimeout(this._timeOutList[i]);
        }
        this._timeOutList = [];
    }
    protected clearOneTimeOut(id: number) {
        for (var i: number = 0; i < this._timeOutList.length; i++) {
            if (id == this._timeOutList[i]) {
                egret.clearTimeout(this._timeOutList[i]);
                this._timeOutList.splice(i, 1);
            }
        }
    }
    protected initLangChange() {
        EventManager.getInstance().addEventListener(EventManager.EVENT_LANG_CHANGE, this.langInit, this);
    }
    protected langInit() {
    }
    protected baseInitBtnEvent() {
        for (var i: number = 0; i < this._btnList.length; i++) {
            var _btn: egret.DisplayObjectContainer = this._btnList[i];
            if (_btn) {
                _btn.touchEnabled = true;
                _btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);
            }
        }
    }
    protected baseCleanBtnEvent() {
        if (!this._btnList) {
            return;
        }
        for (var i: number = 0; i < this._btnList.length; i++) {
            var _btn: egret.DisplayObjectContainer = this._btnList[i];
            _btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);
        }
        this._btnList = null;
    }
    protected onBtnTap(e: egret.TouchEvent) {
        this.callBackEvent(null, e.target);
        AudioManager.getInstance().playEffecAudio("button_mp3");
    }
    public setCallBack(fun: Function): void {
        this._callBack = fun;
    }
    public callBackEvent(name: string, data?: any, type?: string): void {
        if (this._callBack) {
            this._callBack(new CustomEventMy(name, data, type));
        }
    }
}