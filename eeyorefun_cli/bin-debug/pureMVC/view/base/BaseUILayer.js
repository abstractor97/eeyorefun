var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BaseUILayer = (function (_super) {
    __extends(BaseUILayer, _super);
    function BaseUILayer() {
        var _this = _super.call(this) || this;
        _this._timeOutList = [];
        _this._btnList = [];
        return _this;
    }
    BaseUILayer.prototype.BaseUILayerGC = function () {
        this.baseCleanBtnEvent();
        EventManager.getInstance().removeEventListener(EventManager.EVENT_LANG_CHANGE, this.langInit, this);
        this._callBack = null;
    };
    BaseUILayer.prototype.addTimeOutID = function (id) {
        this._timeOutList.push(id);
    };
    BaseUILayer.prototype.clearAllTimeOut = function () {
        for (var i in this._timeOutList) {
            egret.clearTimeout(this._timeOutList[i]);
        }
        this._timeOutList = [];
    };
    BaseUILayer.prototype.clearOneTimeOut = function (id) {
        for (var i = 0; i < this._timeOutList.length; i++) {
            if (id == this._timeOutList[i]) {
                egret.clearTimeout(this._timeOutList[i]);
                this._timeOutList.splice(i, 1);
            }
        }
    };
    BaseUILayer.prototype.initLangChange = function () {
        EventManager.getInstance().addEventListener(EventManager.EVENT_LANG_CHANGE, this.langInit, this);
    };
    BaseUILayer.prototype.langInit = function () {
    };
    BaseUILayer.prototype.baseInitBtnEvent = function () {
        for (var i = 0; i < this._btnList.length; i++) {
            var _btn = this._btnList[i];
            if (_btn) {
                _btn.touchEnabled = true;
                _btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);
            }
        }
    };
    BaseUILayer.prototype.baseCleanBtnEvent = function () {
        if (!this._btnList) {
            return;
        }
        for (var i = 0; i < this._btnList.length; i++) {
            var _btn = this._btnList[i];
            _btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);
        }
        this._btnList = null;
    };
    BaseUILayer.prototype.onBtnTap = function (e) {
        this.callBackEvent(null, e.target);
        AudioManager.getInstance().playEffecAudio("button_mp3");
    };
    BaseUILayer.prototype.setCallBack = function (fun) {
        this._callBack = fun;
    };
    BaseUILayer.prototype.callBackEvent = function (name, data, type) {
        if (this._callBack) {
            this._callBack(new CustomEventMy(name, data, type));
        }
    };
    return BaseUILayer;
}(eui.Component));
__reflect(BaseUILayer.prototype, "BaseUILayer", ["IcallBack"]);
//# sourceMappingURL=BaseUILayer.js.map