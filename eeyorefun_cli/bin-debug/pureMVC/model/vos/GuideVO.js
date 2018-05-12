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
var GuideVO = (function (_super) {
    __extends(GuideVO, _super);
    function GuideVO(data) {
        var _this = _super.call(this, data) || this;
        _this.startKeyVO = new DoKeyVO(_this.startKeyID);
        _this.endKeyVO = new DoKeyVO(_this.endKeyID);
        _this.startControlVO = new GuideGameControlVO(_this.c_start);
        _this.endControlVO = new GuideGameControlVO(_this.c_end);
        return _this;
    }
    GuideVO.prototype.clewBtnPosVO = function () {
        return new GuidePosVO(this.clewBtn, 4);
    };
    GuideVO.prototype.womenPosVO = function () {
        return new GuidePosVO(this.womenPos, 0);
    };
    GuideVO.prototype.eraserPosVO = function () {
        return new GuidePosVO(this.eraserShap, 1);
    };
    GuideVO.prototype.arrowPosVO = function () {
        return new GuidePosVO(this.arrowPos, 2);
    };
    GuideVO.prototype.clewRectVO = function () {
        return new GuidePosVO(this.clewRect, 3);
    };
    return GuideVO;
}(BaseVO));
__reflect(GuideVO.prototype, "GuideVO");
var DoKeyVO = (function () {
    function DoKeyVO(str) {
        this.value = "";
        var _arr = String(str).split(":");
        this.keyID = Number(_arr[0]);
        if (_arr.length > 1) {
            this.value = _arr[1];
        }
    }
    return DoKeyVO;
}());
__reflect(DoKeyVO.prototype, "DoKeyVO");
//# sourceMappingURL=GuideVO.js.map