var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RequestManager = (function () {
    function RequestManager() {
        this._funList = new Object();
        this._countNum = 0;
        if (RequestManager._instance != null) {
            return;
        }
    }
    RequestManager.getInstance = function () {
        if (RequestManager._instance == null) {
            RequestManager._instance = new RequestManager();
        }
        return RequestManager._instance;
    };
    RequestManager.prototype.addCallBack = function (fun) {
        var _num = this.getCallBackID();
        this._funList["fun_" + _num] = fun;
        return _num;
    };
    RequestManager.prototype.getCallBack = function (id) {
        return this._funList["fun_" + id];
    };
    RequestManager.prototype.delCallBack = function (id) {
        this._funList["fun_" + id] = null;
        delete this._funList["fun_" + id];
    };
    RequestManager.prototype.getCallBackID = function () {
        return ++this._countNum;
    };
    return RequestManager;
}());
__reflect(RequestManager.prototype, "RequestManager");
//# sourceMappingURL=RequestManager.js.map