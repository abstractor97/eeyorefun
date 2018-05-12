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
var PlaySceneView = (function (_super) {
    __extends(PlaySceneView, _super);
    //显示对象
    function PlaySceneView(gameStartVO) {
        var _this = _super.call(this) || this;
        _this._teamPlayers = 1;
        _this.skinName = StaticData.getSkinName("PlaySceneSkin");
        return _this;
    }
    PlaySceneView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlaySceneView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return PlaySceneView;
}(BaseSceneView));
__reflect(PlaySceneView.prototype, "PlaySceneView");
//# sourceMappingURL=PlaySceneView.js.map