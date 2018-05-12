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
var LoadGameServerCommand = (function (_super) {
    __extends(LoadGameServerCommand, _super);
    function LoadGameServerCommand() {
        var _this = _super.call(this) || this;
        _this._groupName = "loadingRes";
        return _this;
    }
    LoadGameServerCommand.prototype.execute = function (notification) {
        var _reqVO = notification.getBody();
        this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, this.loadListDataCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100005)));
    };
    LoadGameServerCommand.prototype.loadListDataCom = function (recVO) {
        this._socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME);
        this._recServerObj = new RecGameServerObj(recVO.data);
        StaticData.S_ID = this._recServerObj.sid;
        this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100006), true, 0));
        this._socketProxy.connectSocket(this._recServerObj.server, this.socketConnect.bind(this));
    };
    LoadGameServerCommand.prototype.socketConnect = function (isConn) {
        this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
        if (isConn) {
            if (this._recServerObj.uid == 0) {
                this.sendNotification(StaticEvent.N_C_LOAD_GAME_REGISTER_UID, StaticData.OPEN_ID);
            }
            else {
                StaticData.USER_UID = this._recServerObj.uid;
                this.sendNotification(StaticEvent.N_C_LOAD_BASE_INFO, true);
            }
        }
    };
    return LoadGameServerCommand;
}(puremvc.SimpleCommand));
__reflect(LoadGameServerCommand.prototype, "LoadGameServerCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadGameServerCommand.js.map