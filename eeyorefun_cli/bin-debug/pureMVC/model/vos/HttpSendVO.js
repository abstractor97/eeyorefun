var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpSendVO = (function () {
    function HttpSendVO(url, _sendType, data, _callBack, _loadingType, _loadingTitle) {
        this.sendURL = url;
        this.dataObj = data;
        this.sendType = _sendType;
        this.loadingType = _loadingType;
        this.loadingTitle = _loadingTitle;
        this.callBack = _callBack;
    }
    HttpSendVO.prototype.gc = function () {
        this.callBack = null;
        this.dataObj = null;
    };
    Object.defineProperty(HttpSendVO.prototype, "sendVOStr", {
        get: function () {
            var _str = "sendURL:" + this.sendURL + ",sendType:" + this.sendType + ",sendData:" + this.sendStr;
            return _str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpSendVO.prototype, "sendStr", {
        get: function () {
            var _str = "";
            if (this.dataObj) {
                _str = JSON.stringify(this.dataObj);
            }
            else if (this.dataObj) {
                _str = this.dataObj;
            }
            return _str;
        },
        enumerable: true,
        configurable: true
    });
    return HttpSendVO;
}());
__reflect(HttpSendVO.prototype, "HttpSendVO");
//# sourceMappingURL=HttpSendVO.js.map