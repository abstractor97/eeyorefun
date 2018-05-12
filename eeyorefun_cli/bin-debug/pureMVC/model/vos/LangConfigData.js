var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LangConfigData = (function () {
    function LangConfigData(obj) {
        this._langList = [];
        var _tempArr = StaticFun.getObjList(obj);
        for (var i = 0; i < _tempArr.length; i++) {
            this._langList.push(new LangVO(_tempArr[i]));
        }
    }
    LangConfigData.prototype.getLangStrByID = function (id) {
        if (id === void 0) { id = 100002; }
        for (var i = 0; i < this._langList.length; i++) {
            var _vo = this._langList[i];
            if (id == _vo.id) {
                return _vo.str;
            }
        }
        return null;
    };
    LangConfigData.LANG_ID = 1;
    return LangConfigData;
}());
__reflect(LangConfigData.prototype, "LangConfigData");
//# sourceMappingURL=LangConfigData.js.map