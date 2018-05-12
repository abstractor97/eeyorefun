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
var OffLineCommand = (function (_super) {
    __extends(OffLineCommand, _super);
    function OffLineCommand() {
        return _super.call(this) || this;
    }
    OffLineCommand.prototype.execute = function (notification) {
        var _socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME);
        _socketProxy.closeSocket(this.socketCloseFun.bind(this));
    };
    OffLineCommand.prototype.socketCloseFun = function (socketVO) {
        AlertCtrl.getInstance().showAlertNoBtn(StaticData.langConfig.getLangStrByID(110060));
    };
    return OffLineCommand;
}(puremvc.SimpleCommand));
__reflect(OffLineCommand.prototype, "OffLineCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=OffLineCommand.js.map