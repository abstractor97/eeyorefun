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
var ReqPingObj = (function (_super) {
    __extends(ReqPingObj, _super);
    function ReqPingObj() {
        var _this = _super.call(this) || this;
        _this.cmd = 20036;
        return _this;
    }
    return ReqPingObj;
}(ReqBaseObj));
__reflect(ReqPingObj.prototype, "ReqPingObj");
//# sourceMappingURL=ReqPingObj.js.map