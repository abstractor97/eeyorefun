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
var ReqGameServerObj = (function (_super) {
    __extends(ReqGameServerObj, _super);
    function ReqGameServerObj(_acc, pw) {
        if (pw === void 0) { pw = ""; }
        var _this = _super.call(this) || this;
        _this.acc = _acc;
        _this.pass = pw;
        _this.platid = StaticData.PLAT_ID;
        _this.cmd = 10000;
        _this.msgid = 1005;
        return _this;
    }
    ReqGameServerObj.PLATID_1010 = 1010;
    ReqGameServerObj.PLATID_1011 = 1011;
    ReqGameServerObj.PLATID_1012 = 1012;
    ReqGameServerObj.PLATID_1013 = 1013;
    return ReqGameServerObj;
}(ReqBaseObj));
__reflect(ReqGameServerObj.prototype, "ReqGameServerObj");
//# sourceMappingURL=ReqGameServerObj.js.map