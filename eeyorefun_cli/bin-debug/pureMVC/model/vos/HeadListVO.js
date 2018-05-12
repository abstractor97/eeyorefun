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
var HeadListVO = (function (_super) {
    __extends(HeadListVO, _super);
    function HeadListVO(list) {
        var _this = _super.call(this) || this;
        _this.dataList = [];
        for (var i in list) {
            _this.dataList.push(new HeadObj(list[i]));
        }
        return _this;
    }
    HeadListVO.prototype.getHeadObjByID = function (id) {
        if (id === void 0) { id = -1; }
        if (id == -1) {
            return StaticFun.getRanList(this.dataList, 1)[0];
        }
        for (var i in this.dataList) {
            var _obj = this.dataList[i];
            if (_obj.id == id) {
                return _obj;
            }
        }
    };
    HeadListVO.prototype.getIndexByID = function (id) {
        for (var i = 0; i < this.dataList.length; i++) {
            if (id == this.dataList[i].id) {
                return i;
            }
        }
    };
    return HeadListVO;
}(BaseVO));
__reflect(HeadListVO.prototype, "HeadListVO");
var HeadObj = (function (_super) {
    __extends(HeadObj, _super);
    function HeadObj(obj) {
        return _super.call(this, obj) || this;
    }
    return HeadObj;
}(BaseVO));
__reflect(HeadObj.prototype, "HeadObj");
//# sourceMappingURL=HeadListVO.js.map