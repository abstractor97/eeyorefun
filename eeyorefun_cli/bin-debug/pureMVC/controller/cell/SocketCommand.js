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
var SocketCommand = (function (_super) {
    __extends(SocketCommand, _super);
    function SocketCommand() {
        return _super.call(this) || this;
    }
    SocketCommand.prototype.execute = function (notification) {
        var _socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME);
        switch (notification.getType()) {
            case StaticEvent.SOCKET_CONNECT:
                this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(LoadingViewMediator.LOAD_TYPE_FIREST, "正在连接服务器...", false));
                break;
            case StaticEvent.SOCKET_STATE:
                this.socketState(notification.getBody());
                break;
        }
    };
    SocketCommand.prototype.socketState = function (isConnect) {
        if (isConnect) {
            this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
            this.sendNotification(StaticEvent.N_C_LOAD_TITLE_SCENE);
        }
        else {
            this.facade.retrieveProxy(WebSocketProxy.NAME).closeSocket();
            this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
        }
    };
    return SocketCommand;
}(puremvc.SimpleCommand));
__reflect(SocketCommand.prototype, "SocketCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=SocketCommand.js.map