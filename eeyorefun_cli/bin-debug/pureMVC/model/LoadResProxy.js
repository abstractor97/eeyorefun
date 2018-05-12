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
/**
 *
 * @author
 *
 */
var LoadResProxy = (function (_super) {
    __extends(LoadResProxy, _super);
    function LoadResProxy() {
        var _this = _super.call(this, LoadResProxy.NAME) || this;
        _this._loadList = new Array();
        _this._isAddListener = false;
        return _this;
    }
    LoadResProxy.prototype.checkHave = function (resVO) {
        for (var i = 0; i < this._loadList.length; i++) {
            if (resVO == this._loadList[i]) {
                return true;
            }
        }
        return false;
    };
    LoadResProxy.prototype.addLoadRes = function (resVO) {
        if (!this.checkHave(resVO)) {
            this._loadList.push(resVO);
        }
        this.startLoad();
    };
    LoadResProxy.prototype.startLoad = function () {
        if (this._currLoadingVO != null) {
            return;
        }
        if (this._loadList.length > 0) {
            this.addListener();
            this._currLoadingVO = this._loadList.shift();
            this._currLoadList = RES.getGroupByName(this._currLoadingVO.resName);
            this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, this._currLoadingVO.loadingVO);
            RES.loadGroup(this._currLoadingVO.resName);
        }
        else {
            this.removeListener();
        }
    };
    LoadResProxy.prototype.onRegister = function () {
    };
    LoadResProxy.prototype.addListener = function () {
        if (this._isAddListener) {
            return;
        }
        this._isAddListener = true;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    };
    LoadResProxy.prototype.removeListener = function () {
        this._isAddListener = false;
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    };
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    LoadResProxy.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == this._currLoadingVO.resName) {
            if (this._currLoadingVO.callBack != null) {
                this._currLoadingVO.callBack();
                this._currLoadingVO.callBack = null;
            }
            this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL, this._currLoadingVO.loadingVO);
            this._currLoadingVO = null;
            this.startLoad();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    LoadResProxy.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load,name:" + this._currLoadingVO.resName);
    };
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    LoadResProxy.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    LoadResProxy.prototype.onResourceProgress = function (event) {
        if (event.groupName == this._currLoadingVO.resName) {
            this._currLoadingVO.loadingVO.setPer(event.itemsLoaded, event.itemsTotal, this._currLoadList[event.itemsLoaded - 1].url);
            this.facade.sendNotification(StaticEvent.N_M_LOADING_PROGRESS, this._currLoadingVO.loadingVO);
        }
    };
    LoadResProxy.NAME = "loadResGroupProxy";
    return LoadResProxy;
}(puremvc.Proxy));
__reflect(LoadResProxy.prototype, "LoadResProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
//# sourceMappingURL=LoadResProxy.js.map