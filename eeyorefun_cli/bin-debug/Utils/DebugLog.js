var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DebugLog = (function () {
    function DebugLog() {
        this._debugStr = "";
    }
    DebugLog.getInstance = function () {
        if (DebugLog._instance == null) {
            DebugLog._instance = new DebugLog();
        }
        return DebugLog._instance;
    };
    DebugLog.prototype.getLogStr = function () {
        return this._debugStr;
    };
    DebugLog.prototype.showLog = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        if (!StaticData.IS_LOG) {
            return;
        }
        var _str = "\n" + message;
        this._debugStr += _str;
        console.log.apply(console, [message].concat(optionalParams));
    };
    return DebugLog;
}());
__reflect(DebugLog.prototype, "DebugLog");
//# sourceMappingURL=DebugLog.js.map