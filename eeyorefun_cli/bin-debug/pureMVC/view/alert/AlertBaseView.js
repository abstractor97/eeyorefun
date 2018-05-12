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
/**
 * AlertBaseView extends egret.gui.TitleW
 */
var AlertBaseView = (function (_super) {
    __extends(AlertBaseView, _super);
    function AlertBaseView(clew, enterFun, cancelFun) {
        var _this = _super.call(this) || this;
        // this.isEase = false;
        _this._clew = clew;
        _this.isShowBG = true;
        _this._enterFun = enterFun;
        _this._cancelFun = cancelFun;
        _this.skinName = "AlertBaseSkin";
        return _this;
    }
    AlertBaseView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    AlertBaseView.prototype.hideBtn = function () {
        this.gp_enter.visible = this.gp_cancel.visible = false;
    };
    AlertBaseView.prototype.childrenCreated = function () {
        this.label_clew.textFlow = new egret.HtmlTextParser().parser(this._clew);
        if (!this.enterFun || !this._cancelFun) {
            this.gp_cancel.visible = false;
            this.gp_enter.horizontalCenter = 0;
        }
        this.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enterFun, this);
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelFun, this);
    };
    AlertBaseView.prototype.closeFun = function (e) {
        this.removeThis();
        if (this._cancelFun) {
            this._cancelFun();
        }
        else if (this._enterFun) {
            this._enterFun();
        }
    };
    AlertBaseView.prototype.removeThis = function () {
        this._enterFun = null;
        this._cancelFun = null;
        this.btn_enter.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.enterFun, this);
        this.btn_cancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelFun, this);
        this.parent.delView(this);
    };
    AlertBaseView.prototype.enterFun = function (e) {
        if (this._enterFun != null) {
            this._enterFun();
        }
        this.removeThis();
    };
    AlertBaseView.prototype.cancelFun = function (e) {
        if (this._cancelFun != null) {
            this._cancelFun();
        }
        this.removeThis();
    };
    return AlertBaseView;
}(PopupViewBase));
__reflect(AlertBaseView.prototype, "AlertBaseView");
//# sourceMappingURL=AlertBaseView.js.map