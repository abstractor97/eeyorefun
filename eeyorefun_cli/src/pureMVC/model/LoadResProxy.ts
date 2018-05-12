/**
 *
 * @author 
 *
 */
class LoadResProxy extends puremvc.Proxy implements puremvc.IProxy {
    public static NAME: string = "loadResGroupProxy";

    private _loadList: Array<LoadResVO> = new Array<LoadResVO>();
    private _currLoadingVO: LoadResVO;
    private _isAddListener: Boolean = false;
    public constructor() {
        super(LoadResProxy.NAME);

    }
    private checkHave(resVO: LoadResVO): Boolean {
        for (var i = 0; i < this._loadList.length; i++) {
            if (resVO == this._loadList[i]) {
                return true;
            }
        }
        return false;
    }

    public addLoadRes(resVO: LoadResVO): void {
        if (!this.checkHave(resVO)) {
            this._loadList.push(resVO);
        }
        this.startLoad();
    }
    private _currLoadList: RES.ResourceItem[];
    private startLoad(): void {
        if (this._currLoadingVO != null) {
            return;
        }
        if (this._loadList.length > 0) {
            this.addListener();
            this._currLoadingVO = this._loadList.shift();
            this._currLoadList = RES.getGroupByName(this._currLoadingVO.resName);
            this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, this._currLoadingVO.loadingVO);
            RES.loadGroup(this._currLoadingVO.resName);
        } else {
            this.removeListener();
        }
    }

    public onRegister(): void {

    }

    private addListener(): void {
        if (this._isAddListener) {
            return;
        }
        this._isAddListener = true;
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }
    private removeListener(): void {
        this._isAddListener = false;
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
    }
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent): void {

        if (event.groupName == this._currLoadingVO.resName) {
            if (this._currLoadingVO.callBack != null) {
                this._currLoadingVO.callBack();
                this._currLoadingVO.callBack = null;
            }
            this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL,this._currLoadingVO.loadingVO);
            this._currLoadingVO = null;
            this.startLoad();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent): void {
        console.warn("Url:" + event.resItem.url + " has failed to load,name:" + this._currLoadingVO.resName);
    }

    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //ignore loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private onResourceProgress(event: RES.ResourceEvent): void {
        if (event.groupName == this._currLoadingVO.resName) {
            this._currLoadingVO.loadingVO.setPer(event.itemsLoaded, event.itemsTotal, this._currLoadList[event.itemsLoaded - 1].url);
            this.facade.sendNotification(StaticEvent.N_M_LOADING_PROGRESS, this._currLoadingVO.loadingVO);
        }
    }
}
