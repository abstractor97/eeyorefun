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
var ReqUserBaseInfoObj = (function (_super) {
    __extends(ReqUserBaseInfoObj, _super);
    function ReqUserBaseInfoObj() {
        var _this = _super.call(this) || this;
        _this.flag = 256; //获取表数据标志（暂时取值：256）
        _this.cmd = 10002;
        return _this;
    }
    return ReqUserBaseInfoObj;
}(ReqBaseObj));
__reflect(ReqUserBaseInfoObj.prototype, "ReqUserBaseInfoObj");
//# sourceMappingURL=ReqUserBaseInfoObj.js.map