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
 *
 * @author
 *
 */
var LoadingSmallView = (function (_super) {
    __extends(LoadingSmallView, _super);
    function LoadingSmallView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoadingSmallSkin";
        return _this;
    }
    LoadingSmallView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadingSmallView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this._isPer) {
            this.img_icon_1.visible = false;
            this.lb_per.visible = true;
        }
        else {
            this.img_icon_1.visible = true;
            this.lb_per.text = "loading";
            this.setIconRotation();
        }
    };
    LoadingSmallView.prototype.setIsPer = function (isPer) {
        this._isPer = isPer;
    };
    LoadingSmallView.prototype.setProgress = function (_per) {
        if (!this._isPer) {
            return;
        }
        this.lb_per.text = Math.floor(100 * _per) + "%";
    };
    LoadingSmallView.prototype.setIconRotation = function () {
        egret.Tween.removeTweens(this.gp_icon);
        egret.Tween.get(this.gp_icon).to({ rotation: -360 }, 2000).call(this.setIconRotation.bind(this));
    };
    LoadingSmallView.prototype.baseGC = function () {
        egret.Tween.removeTweens(this.gp_icon);
    };
    return LoadingSmallView;
}(BaseLoadingView));
__reflect(LoadingSmallView.prototype, "LoadingSmallView");
//# sourceMappingURL=LoadingSmallView.js.map