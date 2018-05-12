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
var BaseLoadingView = (function (_super) {
    __extends(BaseLoadingView, _super);
    function BaseLoadingView() {
        var _this = _super.call(this) || this;
        _this.isEase = false;
        return _this;
    }
    BaseLoadingView.prototype.setIsPer = function (isPer) {
        this._isPer = isPer;
        if (!isPer) {
            this.lb_per.text = "loading...";
        }
    };
    BaseLoadingView.prototype.setTips = function (tips) {
        this.lb_tips.text = tips;
        // StaticFun.setLabelStr(this.lb_tips,tips);
    };
    BaseLoadingView.prototype.setTitle = function (_title) {
        this.lb_title.text = _title;
        // StaticFun.setLabelStr(this.lb_title,_title);
    };
    BaseLoadingView.prototype.setProgress = function (_per) {
        if (!this._isPer) {
            return;
        }
        this.thumb.scaleX = _per;
        this.lb_per.text = Math.floor(100 * _per) + "%";
    };
    BaseLoadingView.prototype.baseGC = function () {
    };
    return BaseLoadingView;
}(PopupViewBase));
__reflect(BaseLoadingView.prototype, "BaseLoadingView");
//# sourceMappingURL=BaseLoadingView.js.map