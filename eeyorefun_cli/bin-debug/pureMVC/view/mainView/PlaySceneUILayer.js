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
var PlaySceneUILayer = (function (_super) {
    __extends(PlaySceneUILayer, _super);
    function PlaySceneUILayer() {
        var _this = _super.call(this) || this;
        _this.skinName = StaticData.getSkinName("PlaySceneUISkin");
        return _this;
    }
    PlaySceneUILayer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlaySceneUILayer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    PlaySceneUILayer.prototype.baseGC = function () {
    };
    PlaySceneUILayer.EVENT_SPEED_CHANGE = "speed_change";
    return PlaySceneUILayer;
}(BaseUILayer));
__reflect(PlaySceneUILayer.prototype, "PlaySceneUILayer", ["IBaseGC"]);
//# sourceMappingURL=PlaySceneUILayer.js.map