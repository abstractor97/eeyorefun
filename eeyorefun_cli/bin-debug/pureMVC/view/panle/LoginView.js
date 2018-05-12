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
var LoginView = (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.skinName = StaticData.getSkinName("loginViewSkin");
        return _this;
    }
    LoginView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoginView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this._btnList = [this.btn_login, this.btn_cancel];
        _super.prototype.baseInitBtnEvent.call(this);
        this.lb_acc.type = egret.TextFieldType.INPUT;
        this.lb_pw.type = egret.TextFieldType.INPUT;
    };
    LoginView.prototype.thisClose = function () {
        _super.prototype.baseCloseWindow.call(this);
    };
    LoginView.prototype.getReqServerObj = function () {
        var _acc = this.lb_acc.text;
        var _pw = this.lb_pw.text;
        if (_acc == "") {
            AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110042));
            return;
        }
        if (_pw == "") {
            AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110031));
            return;
        }
        return new ReqGameServerObj(_acc, _pw);
    };
    return LoginView;
}(PopupViewBase));
__reflect(LoginView.prototype, "LoginView");
//# sourceMappingURL=LoginView.js.map