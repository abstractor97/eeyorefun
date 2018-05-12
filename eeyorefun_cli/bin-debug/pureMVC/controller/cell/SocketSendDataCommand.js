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
var SocketSendDataCommand = (function (_super) {
    __extends(SocketSendDataCommand, _super);
    function SocketSendDataCommand() {
        return _super.call(this) || this;
    }
    SocketSendDataCommand.prototype.execute = function (notification) {
        var _sendVO = notification.getBody();
        var _socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME);
        if (_sendVO.loadingType != null) {
            this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(_sendVO.loadingType, _sendVO.loadingTitle, false, _sendVO.sendID));
        }
        _socketProxy.sendData(_sendVO);
    };
    return SocketSendDataCommand;
}(puremvc.SimpleCommand));
__reflect(SocketSendDataCommand.prototype, "SocketSendDataCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=SocketSendDataCommand.js.map