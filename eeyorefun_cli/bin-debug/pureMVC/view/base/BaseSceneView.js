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
var BaseSceneView = (function (_super) {
    __extends(BaseSceneView, _super);
    function BaseSceneView() {
        return _super.call(this) || this;
    }
    BaseSceneView.prototype.setCallBackGC = function (fun) {
        this._gcCallBack = fun;
    };
    BaseSceneView.prototype.gcBase = function () {
        if (this._gcCallBack != null) {
            this._gcCallBack();
        }
        this._gcCallBack = null;
    };
    return BaseSceneView;
}(BaseUILayer));
__reflect(BaseSceneView.prototype, "BaseSceneView");
//# sourceMappingURL=BaseSceneView.js.map