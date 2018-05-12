var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var LoadResVO = (function () {
    function LoadResVO(_resName, _callBack, _loadingType, _title, _tip) {
        this.resName = _resName;
        this.callBack = _callBack;
        this.loadingVO = new LoadingVO(_loadingType, _title, true, StaticData.getLoadID(), _tip);
    }
    return LoadResVO;
}());
__reflect(LoadResVO.prototype, "LoadResVO");
//# sourceMappingURL=LoadResVO.js.map