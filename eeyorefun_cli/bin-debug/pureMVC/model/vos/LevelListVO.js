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
var LevelListVO = (function () {
    function LevelListVO(list) {
        this.listVO = [];
        for (var i in list) {
            var _lastObj = this.listVO[this.listVO.length - 1];
            var _newObj = new LevelCellObj(list[i]);
            if (_lastObj) {
                // _newObj.startStar = _lastObj.star + 1;
                _lastObj.endStar = _newObj.star - 1;
            }
            this.listVO.push(_newObj);
        }
    }
    LevelListVO.prototype.getLevelDataByStar = function (star) {
        star = star == 0 ? 1 : star;
        for (var i = 0; i < this.listVO.length; i++) {
            var _curObj = this.listVO[i];
            if (_curObj.star <= star && star <= _curObj.endStar) {
                return _curObj;
            }
        }
        return this.listVO[this.listVO.length - 1];
    };
    LevelListVO.prototype.initAward = function (starVO) {
        for (var i in this.listVO) {
            var _obj = this.listVO[i];
            var _endNum = 0;
            _obj.awardStr = starVO.getStarDataByNum(_obj.star).awardVO.num + "-" + starVO.getStarDataByNum(_obj.endStar).awardVO.num;
        }
    };
    return LevelListVO;
}());
__reflect(LevelListVO.prototype, "LevelListVO");
var LevelCellObj = (function (_super) {
    __extends(LevelCellObj, _super);
    function LevelCellObj(obj) {
        var _this = _super.call(this, obj) || this;
        _this.endStar = 10000;
        return _this;
    }
    return LevelCellObj;
}(BaseVO));
__reflect(LevelCellObj.prototype, "LevelCellObj");
//# sourceMappingURL=LevelListVO.js.map