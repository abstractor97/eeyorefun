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
var SignListVO = (function (_super) {
    __extends(SignListVO, _super);
    function SignListVO(list) {
        var _this = _super.call(this, list) || this;
        _this.signList = [];
        for (var i in list) {
            _this.signList.push(new SignObj(list[i]));
        }
        return _this;
    }
    return SignListVO;
}(BaseVO));
__reflect(SignListVO.prototype, "SignListVO");
var SignObj = (function (_super) {
    __extends(SignObj, _super);
    function SignObj(data) {
        var _this = _super.call(this, data) || this;
        _this.awardObj = new AwardVO(_this.award);
        return _this;
    }
    return SignObj;
}(BaseVO));
__reflect(SignObj.prototype, "SignObj");
//# sourceMappingURL=SignListVO.js.map