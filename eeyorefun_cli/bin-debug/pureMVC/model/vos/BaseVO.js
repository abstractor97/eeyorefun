var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseVO = (function () {
    function BaseVO(data) {
        if (data == null) {
            return;
        }
        for (var key in data) {
            this[key] = data[key];
        }
    }
    return BaseVO;
}());
__reflect(BaseVO.prototype, "BaseVO");
//# sourceMappingURL=BaseVO.js.map