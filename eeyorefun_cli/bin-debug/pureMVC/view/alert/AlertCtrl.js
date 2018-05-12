var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AlertCtrl = (function () {
    function AlertCtrl() {
        if (AlertCtrl._instance != null) {
            throw ("该类是单例模式请使用getInstance()获取");
        }
    }
    AlertCtrl.getInstance = function () {
        if (AlertCtrl._instance == null) {
            AlertCtrl._instance = new AlertCtrl();
        }
        return AlertCtrl._instance;
    };
    AlertCtrl.prototype.setContain = function (view) {
        this._view = view;
    };
    AlertCtrl.prototype.showAlertNoBtn = function (clew) {
        var _view = new AlertBaseView(clew);
        _view.hideBtn();
        _view.horizontalCenter = 0;
        _view.verticalCenter = 0;
        this._view.addView(_view);
    };
    AlertCtrl.prototype.showAlert = function (clew, enterFun, cancelFun) {
        var view = new AlertBaseView(clew, enterFun, cancelFun);
        view.horizontalCenter = 0;
        view.verticalCenter = 0;
        this._view.addView(view);
    };
    return AlertCtrl;
}());
__reflect(AlertCtrl.prototype, "AlertCtrl");
//# sourceMappingURL=AlertCtrl.js.map