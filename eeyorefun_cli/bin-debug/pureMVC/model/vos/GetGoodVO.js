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
var GetGoodVO = (function (_super) {
    __extends(GetGoodVO, _super);
    function GetGoodVO(data) {
        return _super.call(this, data) || this;
    }
    GetGoodVO.prototype.isShowGet = function () {
        if (this.coin > 0 || this.diamond > 0 || this.candies > 0) {
            return true;
        }
        return false;
    };
    GetGoodVO.prototype.getGoodList = function () {
        var _list = [];
        if (this.diamond > 0) {
            _list.push("common_icon_get_diamonds_png");
        }
        if (this.coin > 0) {
            _list.push("common_icon_get_glods_png");
        }
        if (this.candies) {
            _list.push("common_icon_get_candies_png");
        }
        if (this.itemid) {
            _list.push(StaticData.getMallIcon(this.itemid));
        }
        return _list;
    };
    return GetGoodVO;
}(BaseVO));
__reflect(GetGoodVO.prototype, "GetGoodVO");
//# sourceMappingURL=GetGoodVO.js.map