var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadingVO = (function () {
    function LoadingVO(_loadingType, _title, _isPer, _loadingID, _tip) {
        if (_isPer === void 0) { _isPer = true; }
        if (_loadingID === void 0) { _loadingID = 0; }
        this.title = ""; //加载标题
        this.loadingType = _loadingType;
        this.title = _title ? _title : StaticData.langConfig.getLangStrByID(100002);
        this.loadingID = _loadingID;
        this.isPer = _isPer;
        this.tip = _tip;
    }
    LoadingVO.prototype.setPer = function (loaded, totale, _currResURL) {
        this.per = loaded / totale;
        this.currResURL = _currResURL;
    };
    return LoadingVO;
}());
__reflect(LoadingVO.prototype, "LoadingVO");
//# sourceMappingURL=LoadingVO.js.map