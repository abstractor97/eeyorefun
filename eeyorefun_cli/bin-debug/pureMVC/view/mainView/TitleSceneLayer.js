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
var TitleSceneLayer = (function (_super) {
    __extends(TitleSceneLayer, _super);
    function TitleSceneLayer() {
        return _super.call(this) || this;
    }
    TitleSceneLayer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TitleSceneLayer.prototype.childrenCreated = function () {
    };
    TitleSceneLayer.prototype.onBtnTapTest = function (e) {
    };
    return TitleSceneLayer;
}(BaseSceneView));
__reflect(TitleSceneLayer.prototype, "TitleSceneLayer");
//# sourceMappingURL=TitleSceneLayer.js.map