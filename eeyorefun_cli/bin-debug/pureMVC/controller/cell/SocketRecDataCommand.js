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
var SocketRecDataCommand = (function (_super) {
    __extends(SocketRecDataCommand, _super);
    function SocketRecDataCommand() {
        return _super.call(this) || this;
    }
    SocketRecDataCommand.prototype.execute = function (notification) {
        var _obj = notification.getBody();
        var _socketRecVO = new SocketRecVO(_obj);
        if (_socketRecVO.result == StaticData.CODE_0) {
            this.sendNotification(StaticEvent.SOCKET_REC + _socketRecVO.msgid + _socketRecVO.cmd, _socketRecVO);
            var _fun = RequestManager.getInstance().getCallBack(_socketRecVO.seq);
            if (_fun != null) {
                _fun(_socketRecVO);
            }
        }
        else if (_socketRecVO.result == StaticData.CODE_7001) {
            AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110055), this.showShareView.bind(this), function () { });
        }
        else if (_socketRecVO.result == StaticData.CODE_7002) {
            AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110054), this.showPayView.bind(this), function () { });
        }
        else if (_socketRecVO.errmsg) {
            AlertCtrl.getInstance().showAlert(_socketRecVO.errmsg);
        }
        if (_socketRecVO.seq != 0) {
            this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, _socketRecVO.seq));
            RequestManager.getInstance().delCallBack(_socketRecVO.seq);
        }
    };
    ;
    SocketRecDataCommand.prototype.showShareView = function () {
        this.facade.sendNotification(StaticEvent.N_M_SHARE_VIEW_SHOW);
    };
    SocketRecDataCommand.prototype.showPayView = function () {
        this.facade.sendNotification(StaticEvent.N_M_PAY_VIEW_SHOW);
    };
    return SocketRecDataCommand;
}(puremvc.SimpleCommand));
__reflect(SocketRecDataCommand.prototype, "SocketRecDataCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=SocketRecDataCommand.js.map