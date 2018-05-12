var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadResCustomVO = (function () {
    function LoadResCustomVO(_list, _callBack, _loadingType, _resGroupName) {
        if (_loadingType === void 0) { _loadingType = "none"; }
        if (_resGroupName === void 0) { _resGroupName = "null"; }
        if (_resGroupName == "null") {
            _resGroupName = "res_group_" + StaticFun.getRanNum(1000000);
        }
        this.resGroupName = _resGroupName;
        this.list = _list;
        this.loadingType = _loadingType;
        this.callBack = _callBack;
    }
    LoadResCustomVO.prototype.baseGC = function () {
        this.callBack = null;
    };
    return LoadResCustomVO;
}());
__reflect(LoadResCustomVO.prototype, "LoadResCustomVO", ["IBaseGC"]);
//# sourceMappingURL=LoadResCustomVO.js.map