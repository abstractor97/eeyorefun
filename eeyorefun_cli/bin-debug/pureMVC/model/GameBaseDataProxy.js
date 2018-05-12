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
var GameBaseDataProxy = (function (_super) {
    __extends(GameBaseDataProxy, _super);
    function GameBaseDataProxy() {
        var _this = _super.call(this, GameBaseDataProxy.NAME) || this;
        _this._loadingTipList = [];
        _this._manNameList = [];
        _this._womanNameList = [];
        return _this;
    }
    GameBaseDataProxy.prototype.addQQInfoObj = function (qqInfoObj) {
        this._qqInfoObj = qqInfoObj;
    };
    GameBaseDataProxy.prototype.getQQInfoObj = function () {
        return this._qqInfoObj;
    };
    GameBaseDataProxy.prototype.addLoadingTip = function (str) {
        if (!str) {
            return;
        }
        this._loadingTipList = this._loadingTipList.concat(str.split("\n"));
    };
    GameBaseDataProxy.prototype.getLoadingTipRand = function () {
        if (this._loadingTipList.length == 0) {
            return null;
        }
        return StaticFun.getRanList(this._loadingTipList, 1)[0];
    };
    GameBaseDataProxy.prototype.initNameMan = function (str) {
        this._manNameList = str.split("\r\n");
    };
    GameBaseDataProxy.prototype.initNameWoman = function (str) {
        this._womanNameList = str.split("\r\n");
    };
    GameBaseDataProxy.prototype.getRandName = function (sex) {
        if (sex === void 0) { sex = -1; }
        if (sex == 1) {
            return StaticFun.getRanList(this._manNameList, 1)[0];
        }
        else if (sex == 2) {
            return StaticFun.getRanList(this._womanNameList, 1)[0];
        }
        else {
            var _list = this._manNameList.concat(this._womanNameList);
            return StaticFun.getRanList(_list, 1)[0];
        }
    };
    GameBaseDataProxy.prototype.addPayList = function (payListVO) {
        this._payListVO = payListVO;
    };
    GameBaseDataProxy.prototype.getPayList = function () {
        return this._payListVO;
    };
    GameBaseDataProxy.prototype.setHeadVO = function (headVO) {
        this._headListVO = headVO;
    };
    GameBaseDataProxy.prototype.getHeadListVO = function () {
        return this._headListVO;
    };
    GameBaseDataProxy.prototype.setSignListVO = function (listVO) {
        this._signListVO = listVO;
    };
    GameBaseDataProxy.prototype.getSignListVO = function () {
        return this._signListVO;
    };
    GameBaseDataProxy.prototype.setLevelVO = function (levelVO) {
        this._levelVO = levelVO;
    };
    GameBaseDataProxy.prototype.getLevelVO = function () {
        return this._levelVO;
    };
    GameBaseDataProxy.prototype.setMallListVO = function (list) {
        this._mallListVO = list;
    };
    GameBaseDataProxy.prototype.getMallListVO = function () {
        return this._mallListVO;
    };
    GameBaseDataProxy.prototype.setStarVO = function (starVO) {
        this._starVO = starVO;
    };
    GameBaseDataProxy.prototype.getStarVO = function () {
        return this._starVO;
    };
    GameBaseDataProxy.prototype.setTaskConfigVO = function (vo) {
        this._taskConfigVO = vo;
    };
    GameBaseDataProxy.prototype.getTaskConfigVO = function () {
        return this._taskConfigVO;
    };
    GameBaseDataProxy.NAME = "GameBaseDataProxy";
    return GameBaseDataProxy;
}(puremvc.Proxy));
__reflect(GameBaseDataProxy.prototype, "GameBaseDataProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
//# sourceMappingURL=GameBaseDataProxy.js.map