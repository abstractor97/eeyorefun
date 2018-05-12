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
var WebSocketProxy = (function (_super) {
    __extends(WebSocketProxy, _super);
    function WebSocketProxy() {
        var _this = _super.call(this, WebSocketProxy.NAME) || this;
        _this._isChangeServer = false;
        _this._currTicker = 0;
        _this._lastTicker = 0;
        return _this;
    }
    WebSocketProxy.prototype.onRegister = function () {
        this.webSocket = new egret.WebSocket();
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.ioErro, this);
    };
    WebSocketProxy.prototype.connectSocket = function (server, callBack) {
        this._callBackConnect = callBack;
        this._server = server;
        if (this._isConnect) {
            this._isChangeServer = true;
            this.closeSocket(this.setConnectWait);
        }
        else {
            this.setConnect();
        }
        // this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW,new LoadingVO(LoadingViewMediator.LOAD_TYPE_FIREST,StaticData.langConfig.getLangStrByID(100006),false,this._loadID));
    };
    WebSocketProxy.prototype.setConnectWait = function () {
        egret.setTimeout(this.setConnect.bind(this), this, 100);
    };
    WebSocketProxy.prototype.setConnect = function () {
        this._isChangeServer = false;
        DebugLog.getInstance().showLog("连接服务器", this._server);
        // this.webSocket.connect("112.74.46.50", 12002);
        this.webSocket.connectByUrl(this._server);
        // 112.74.46.50:12002
        this._loadID = StaticFun.getRanNum(100000) + 12500;
    };
    WebSocketProxy.prototype.runCallBack = function (status) {
        this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, this._loadID));
        if (this._callBackConnect && this._isConnect) {
            this._callBackConnect(status);
        }
        if (this._callBackClose && !this._isConnect) {
            this._callBackClose(status);
        }
        if (this._isChangeServer) {
            return;
        }
        this._callBackClose = null;
        this._callBackConnect = null;
    };
    WebSocketProxy.prototype.closeSocket = function (callBack) {
        this._callBackClose = callBack;
        if (this._isConnect) {
            this.webSocket.close();
        }
    };
    WebSocketProxy.prototype.ioErro = function (e) {
        this._isConnect = false;
        egret.log("egret.IOErrorEvent:" + e.type);
        AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(100007));
        this.runCallBack(false);
    };
    WebSocketProxy.prototype.onSocketClose = function () {
        this._isConnect = false;
        this.stopHeart();
        this.runCallBack(false);
    };
    WebSocketProxy.prototype.onSocketOpen = function () {
        this._isConnect = true;
        this.runCallBack(true);
    };
    WebSocketProxy.prototype.startHeart = function () {
        if (this._isStartHeart) {
            return;
        }
        this._isStartHeart = true;
        egret.startTick(this.onThisTicker.bind(this), this);
    };
    WebSocketProxy.prototype.stopHeart = function () {
        egret.stopTick(this.onThisTicker.bind(this), this);
    };
    WebSocketProxy.prototype.onThisTicker = function (timeStamp) {
        if (this._lastTicker != 0) {
            this._currTicker += (timeStamp - this._lastTicker);
        }
        this._lastTicker = timeStamp;
        if (this._currTicker > StaticData.configVO.heartTime * 1000) {
            this._currTicker = 0;
            var _reqVO = new ReqPingObj();
            var _sendVO = new SocketSendVO(_reqVO);
            _sendVO.isLog = false;
            this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, _sendVO);
        }
    };
    WebSocketProxy.prototype.onReceiveMessage = function (e) {
        var byte = new egret.ByteArray();
        this.webSocket.readBytes(byte);
        var _len = byte.readShort();
        var _str = byte.readUTFBytes(_len - 2);
        DebugLog.getInstance().showLog("收到数据：" + _str);
        this.facade.sendNotification(StaticEvent.N_C_SOCKET_RECEIVE_DATA, JSON.parse(_str));
    };
    WebSocketProxy.prototype.sendData = function (sendVO) {
        if (sendVO.isLog) {
            DebugLog.getInstance().showLog("发送数据：" + sendVO.sendStr);
        }
        if (!this._isConnect) {
            DebugLog.getInstance().showLog("请先连接服务器!");
            return;
        }
        var _strByteArray = new egret.ByteArray();
        _strByteArray.writeUTFBytes(sendVO.sendStr);
        var byteArray = new egret.ByteArray();
        byteArray.writeShort(2 + _strByteArray.length);
        byteArray.writeBytes(_strByteArray);
        this.webSocket.writeBytes(byteArray);
        this.webSocket.flush();
    };
    WebSocketProxy.NAME = "WebSocketProxy";
    return WebSocketProxy;
}(puremvc.Proxy));
__reflect(WebSocketProxy.prototype, "WebSocketProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
//# sourceMappingURL=WebSocketProxy.js.map