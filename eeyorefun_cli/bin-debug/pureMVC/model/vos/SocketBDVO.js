var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SocketBDVO = (function () {
    function SocketBDVO(_sendID, _dataStr) {
        if (_sendID === void 0) { _sendID = 0; }
        if (_dataStr === void 0) { _dataStr = ""; }
        this.sendID = _sendID;
        this.dataStr = _dataStr;
    }
    SocketBDVO.prototype.initData = function (str) {
        if (str == "" || str == undefined) {
            return;
        }
        var data = JSON.parse(str);
        for (var key in data) {
            this[key] = data[key];
        }
    };
    SocketBDVO.prototype.toString = function () {
        var _obj = new Object();
        _obj["sendID"] = this.sendID;
        _obj["dataStr"] = this.dataStr;
        this._str = JSON.stringify(_obj);
        return this._str;
    };
    return SocketBDVO;
}());
__reflect(SocketBDVO.prototype, "SocketBDVO");
//# sourceMappingURL=SocketBDVO.js.map