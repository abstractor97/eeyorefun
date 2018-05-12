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
var RegistView = (function (_super) {
    __extends(RegistView, _super);
    function RegistView() {
        var _this = _super.call(this) || this;
        _this.skinName = StaticData.getSkinName("registViewSkin");
        return _this;
    }
    RegistView.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RegistView.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this._btnList = [this.btn_regist, this.btn_cancel];
        _super.prototype.baseInitBtnEvent.call(this);
        this.lb_acc.type = egret.TextFieldType.INPUT;
        this.lb_pw1.type = egret.TextFieldType.INPUT;
        this.lb_pw2.type = egret.TextFieldType.INPUT;
    };
    RegistView.prototype.getRegistObj = function () {
        var _acc = this.lb_acc.text;
        var _pw1 = this.lb_pw1.text;
        var _pw2 = this.lb_pw2.text;
        if (_acc == "" || _pw1 == "" || _pw2 == "") {
            AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110045), function () { }, function () { });
            return;
        }
        if (_pw1 != _pw2) {
            AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110037));
            return;
        }
        var _newRegistObj = new ReqNewRegistObj();
        _newRegistObj.acc = _acc;
        _newRegistObj.pass = _pw1;
        return _newRegistObj;
    };
    RegistView.prototype.thisClose = function () {
        _super.prototype.baseCloseWindow.call(this);
    };
    return RegistView;
}(PopupViewBase));
__reflect(RegistView.prototype, "RegistView");
//# sourceMappingURL=RegistView.js.map