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
var LoadingFirstView = (function (_super) {
    __extends(LoadingFirstView, _super);
    function LoadingFirstView() {
        var _this = _super.call(this) || this;
        _this.skinName = "LoadingBaseSkin";
        return _this;
    }
    LoadingFirstView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadingFirstView.prototype.childrenCreated = function () {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
    };
    return LoadingFirstView;
}(BaseLoadingView));
__reflect(LoadingFirstView.prototype, "LoadingFirstView");
//# sourceMappingURL=LoadingFirstView.js.map