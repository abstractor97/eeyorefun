var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GuideGameControlVO = (function () {
    function GuideGameControlVO(str) {
        this.cList = [];
        if (String(str) == "0") {
            return;
        }
        var _arr = str.split("|");
        for (var i in _arr) {
            this.cList.push(new ControlVO(_arr[i]));
        }
    }
    return GuideGameControlVO;
}());
__reflect(GuideGameControlVO.prototype, "GuideGameControlVO");
var ControlVO = (function () {
    function ControlVO(str) {
        this.value = 0;
        var _arr = str.split(":");
        this.control = _arr[0];
        if (_arr.length > 1) {
            this.value = _arr[1];
        }
    }
    return ControlVO;
}());
__reflect(ControlVO.prototype, "ControlVO");
//# sourceMappingURL=GuideGameControlVO.js.map