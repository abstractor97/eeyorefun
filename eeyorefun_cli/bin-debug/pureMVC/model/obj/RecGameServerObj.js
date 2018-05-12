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
var RecGameServerObj = (function (_super) {
    __extends(RecGameServerObj, _super);
    function RecGameServerObj(data) {
        var _this = _super.call(this, data) || this;
        if (StaticData.IS_DEBUG) {
            _this.server = _this.ws;
        }
        else {
            _this.server = _this.wss;
        }
        return _this;
    }
    return RecGameServerObj;
}(BaseVO));
__reflect(RecGameServerObj.prototype, "RecGameServerObj");
//# sourceMappingURL=RecGameServerObj.js.map