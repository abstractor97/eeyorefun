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
var LoadMallCommand = (function (_super) {
    __extends(LoadMallCommand, _super);
    function LoadMallCommand() {
        return _super.call(this) || this;
    }
    LoadMallCommand.prototype.execute = function (notification) {
        this._myRoleID = notification.getBody();
        var _loadResVO = new LoadResVO(StaticData.RES_mallRes, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadMallCommand.prototype.loadResCom = function () {
    };
    LoadMallCommand.prototype.reqMallListCom = function (socket) {
        this.facade.sendNotification(StaticEvent.N_M_MALL_SHOW);
    };
    return LoadMallCommand;
}(puremvc.SimpleCommand));
__reflect(LoadMallCommand.prototype, "LoadMallCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadMallCommand.js.map