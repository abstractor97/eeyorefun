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
var StarListVO = (function () {
    function StarListVO(list) {
        this.listVO = [];
        for (var i in list) {
            this.listVO.push(new StarCellObj(list[i]));
        }
    }
    StarListVO.prototype.getStarDataByNum = function (num) {
        for (var i in this.listVO) {
            var _obj = this.listVO[i];
            if (num == _obj.star) {
                return _obj;
            }
        }
        return this.listVO[this.listVO.length - 1];
    };
    return StarListVO;
}());
__reflect(StarListVO.prototype, "StarListVO");
var StarCellObj = (function (_super) {
    __extends(StarCellObj, _super);
    function StarCellObj(obj) {
        var _this = _super.call(this, obj) || this;
        _this.awardVO = new AwardVO(_this.award);
        return _this;
    }
    return StarCellObj;
}(BaseVO));
__reflect(StarCellObj.prototype, "StarCellObj");
//# sourceMappingURL=StarListVO.js.map