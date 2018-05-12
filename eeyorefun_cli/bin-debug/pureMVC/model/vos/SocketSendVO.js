var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketSendVO = (function () {
    function SocketSendVO(obj, callBack, _loadingType, _loadingTitle) {
        this.isLog = true;
        this.sendID = RequestManager.getInstance().addCallBack(callBack);
        obj["seq"] = this.sendID;
        this._sendStr = JSON.stringify(obj);
        this.loadingType = _loadingType;
        this.loadingTitle = _loadingTitle;
    }
    Object.defineProperty(SocketSendVO.prototype, "sendStr", {
        get: function () {
            return this._sendStr;
        },
        enumerable: true,
        configurable: true
    });
    return SocketSendVO;
}());
__reflect(SocketSendVO.prototype, "SocketSendVO");
//# sourceMappingURL=SocketSendVO.js.map