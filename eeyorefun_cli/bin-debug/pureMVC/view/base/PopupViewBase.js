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
 * TitleWindowBase
 */
var PopupViewBase = (function (_super) {
    __extends(PopupViewBase, _super);
    function PopupViewBase() {
        var _this = _super.call(this) || this;
        _this.isEase = true;
        return _this;
    }
    PopupViewBase.prototype.baseCloseWindow = function () {
        var _parent = this.parent;
        if (_parent != null) {
            _parent.delView(this);
        }
        _super.prototype.BaseUILayerGC.call(this);
    };
    PopupViewBase.prototype.initStageSizeData = function () {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
    };
    PopupViewBase.prototype.initScale = function () {
        // var _scaleX:number=this.stage.stageWidth/this.width;
        var _scaleY = this.stage.stageHeight / StaticData.GAME_H;
        // _scaleX=Math.min(_scaleX,1);
        _scaleY = Math.min(_scaleY, 1);
        // var _setScale:number=Math.min(_scaleX,_scaleY);
        this.scaleX = this.scaleY = _scaleY;
    };
    return PopupViewBase;
}(BaseUILayer));
__reflect(PopupViewBase.prototype, "PopupViewBase");
//# sourceMappingURL=PopupViewBase.js.map