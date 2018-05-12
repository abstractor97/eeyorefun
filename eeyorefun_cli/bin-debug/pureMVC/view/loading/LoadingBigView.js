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
var LoadingBigView = (function (_super) {
    __extends(LoadingBigView, _super);
    function LoadingBigView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoadingBigSkin";
        return _this;
    }
    LoadingBigView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadingBigView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.img_bar_1.mask = this.img_mask_bar_1;
        this.img_bar_2.mask = this.thumb;
        if (this._isPer) {
            this.gp_bar_1.visible = false;
            this.gp_bar_2.visible = true;
        }
        else {
            this.gp_bar_1.visible = true;
            this.gp_bar_2.visible = false;
            this.setBarMove();
        }
    };
    LoadingBigView.prototype.setBarMove = function () {
        this.img_bar_1.x = -this.img_bar_1.width;
        var _endX = this.img_mask_bar_1.x + this.img_mask_bar_1.width;
        egret.Tween.removeTweens(this.img_bar_1);
        egret.Tween.get(this.img_bar_1).to({ x: _endX }, 5000).call(this.setBarMove.bind(this));
    };
    LoadingBigView.prototype.baseGC = function () {
        egret.Tween.removeTweens(this.img_bar_1);
    };
    return LoadingBigView;
}(BaseLoadingView));
__reflect(LoadingBigView.prototype, "LoadingBigView");
//# sourceMappingURL=LoadingBigView.js.map