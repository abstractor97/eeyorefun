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
var PopupBaseLayer = (function (_super) {
    __extends(PopupBaseLayer, _super);
    function PopupBaseLayer() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onToStage, _this);
        _this.addEventListener(egret.Event.RESIZE, _this.onReSize, _this);
        return _this;
    }
    PopupBaseLayer.prototype.onReSize = function () {
        if (this._mask) {
            this._mask.width = this.stage.stageWidth;
            this._mask.height = this.stage.stageHeight;
        }
    };
    PopupBaseLayer.prototype.onToStage = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onToStage, this);
        this._mask = new eui.Rect(this.stage.stageWidth, this.stage.stageHeight, 0x000000);
        this._mask.alpha = 0.8;
        this._mask.visible = false;
        this.addChild(this._mask);
    };
    PopupBaseLayer.prototype.addView = function (view) {
        if (!this.contains(view)) {
            this.addChild(view);
            var _scale = view.scaleX;
            if (view.isEase) {
                view.scaleX = view.scaleY = 0.1;
                egret.Tween.removeTweens(view);
                egret.Tween.get(view).to({ scaleX: _scale, scaleY: _scale }, 300, egret.Ease.backOut);
            }
        }
        this.setMaskTier(true);
    };
    PopupBaseLayer.prototype.delView = function (view) {
        if (this.contains(view)) {
            this.removeChild(view);
        }
        this.setMaskTier(false);
    };
    PopupBaseLayer.prototype.setMaskTier = function (isAdd) {
        if (this.numChildren > 1) {
            var _depth = isAdd ? 1 : 2;
            var _view = this.getChildAt(this.numChildren - _depth);
            this._mask.visible = _view.isShowBG;
            this.touchEnabled = _view.isShowBG;
            this.setChildIndex(this._mask, this.numChildren - 2);
            this.onReSize();
        }
        else {
            this._mask.visible = false;
            this.touchEnabled = false;
        }
    };
    return PopupBaseLayer;
}(eui.UILayer));
__reflect(PopupBaseLayer.prototype, "PopupBaseLayer");
//# sourceMappingURL=PopupBaseLayer.js.map