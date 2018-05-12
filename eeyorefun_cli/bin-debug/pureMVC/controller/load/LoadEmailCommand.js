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
var LoadEmailCommand = (function (_super) {
    __extends(LoadEmailCommand, _super);
    function LoadEmailCommand() {
        return _super.call(this) || this;
    }
    LoadEmailCommand.prototype.execute = function (notification) {
        var _loadResVO = new LoadResVO(StaticData.RES_emailRes, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadEmailCommand.prototype.loadResCom = function () {
        var _reqVO = new ReqEmailListObj();
        this.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, this.loadEmailCom.bind(this)));
    };
    LoadEmailCommand.prototype.loadEmailCom = function (vo) {
        var _recVO = new RecEmailListVO(vo.data);
        this.facade.sendNotification(StaticEvent.N_M_EMAIL_SHOW, _recVO);
    };
    return LoadEmailCommand;
}(puremvc.SimpleCommand));
__reflect(LoadEmailCommand.prototype, "LoadEmailCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadEmailCommand.js.map