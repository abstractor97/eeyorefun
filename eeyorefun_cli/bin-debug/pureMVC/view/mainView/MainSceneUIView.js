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
var MainSceneUIView = (function (_super) {
    __extends(MainSceneUIView, _super);
    function MainSceneUIView(userVO, levelListVO) {
        var _this = _super.call(this) || this;
        _this._userVO = userVO;
        _this._levelListVO = levelListVO;
        _this.skinName = StaticData.getSkinName("MainSceneUISkin");
        return _this;
    }
    MainSceneUIView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainSceneUIView.prototype.childrenCreated = function () {
        _super.prototype.baseInitBtnEvent.call(this);
        EventManager.getInstance().addEventListener(EventManager.EVENT_USER_INFO_CHANGE, this.onUserInfoChange, this);
    };
    MainSceneUIView.prototype.onUserInfoChange = function (e) {
    };
    MainSceneUIView.prototype.baseGC = function () {
        EventManager.getInstance().removeEventListener(EventManager.EVENT_USER_INFO_CHANGE, this.onUserInfoChange, this);
        _super.prototype.BaseUILayerGC.call(this);
    };
    return MainSceneUIView;
}(BaseUILayer));
__reflect(MainSceneUIView.prototype, "MainSceneUIView", ["IBaseGC"]);
//# sourceMappingURL=MainSceneUIView.js.map