var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * ChangeBtnState
 */
var ChangeBtnState = (function () {
    function ChangeBtnState() {
    }
    ChangeBtnState.getInstance = function () {
        if (this._instance == null) {
            this._instance = new ChangeBtnState();
        }
        return this._instance;
    };
    ChangeBtnState.prototype.changState = function (disObj, isEnable) {
        if (isEnable) {
            disObj.scaleX = disObj.scaleY = 1;
        }
        else {
            disObj.scaleX = disObj.scaleY = 0.8;
        }
        disObj.touchEnabled = isEnable;
    };
    return ChangeBtnState;
}());
__reflect(ChangeBtnState.prototype, "ChangeBtnState");
//# sourceMappingURL=ChangeBtnState.js.map