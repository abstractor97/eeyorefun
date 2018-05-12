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
var BaseItemRenderer = (function (_super) {
    __extends(BaseItemRenderer, _super);
    function BaseItemRenderer() {
        return _super.call(this) || this;
    }
    BaseItemRenderer.prototype.onRemove = function (e) {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);
        this.baseGC();
    };
    BaseItemRenderer.prototype.baseGC = function () {
    };
    BaseItemRenderer.prototype.initThisTap = function () {
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTap, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
    };
    BaseItemRenderer.prototype.onBtnTap = function (e) {
    };
    return BaseItemRenderer;
}(eui.ItemRenderer));
__reflect(BaseItemRenderer.prototype, "BaseItemRenderer");
//# sourceMappingURL=BaseItemRenderer.js.map