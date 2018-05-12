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
var LangVO = (function (_super) {
    __extends(LangVO, _super);
    function LangVO(obj) {
        return _super.call(this, obj) || this;
    }
    return LangVO;
}(BaseVO));
__reflect(LangVO.prototype, "LangVO");
//# sourceMappingURL=LangVO.js.map