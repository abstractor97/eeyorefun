var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ReqBaseObj = (function () {
    function ReqBaseObj() {
        this.msgid = 1002;
        this.ver = "1.0"; //客户端版本号
        this.uid = StaticData.USER_UID;
    }
    return ReqBaseObj;
}());
__reflect(ReqBaseObj.prototype, "ReqBaseObj");
//# sourceMappingURL=ReqBaseObj.js.map