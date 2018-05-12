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
var SocketRecVO = (function (_super) {
    __extends(SocketRecVO, _super);
    function SocketRecVO(data) {
        return _super.call(this, data) || this;
    }
    return SocketRecVO;
}(BaseVO));
__reflect(SocketRecVO.prototype, "SocketRecVO");
//# sourceMappingURL=SocketRecVO.js.map