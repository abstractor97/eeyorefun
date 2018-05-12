/**
 *
 * @author 
 *
 */
class LoadingFirstCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    private _groupName: string = "loadingRes";
    private _gameData: GameBaseDataProxy;
    public constructor() {
        super();
    }
    public execute(notification: puremvc.INotification): void {
        var _loadResVO: LoadResVO = new LoadResVO(
            this._groupName,
            this.loadResCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_FIREST,
            "Loading",
            "loading..."
        );
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    }
    private loadResCom(): void {
        var _obj: Object = RES.getRes("config_json");
        StaticData.configVO = new ConfigVO(_obj);

        StaticData.IS_DEBUG = StaticData.configVO.isDebug;
        StaticData.IS_LOG = StaticData.configVO.isLog;

        var _langConfigObj: Object = RES.getRes("langConfig_json");
        // DebugLog.getInstance().showLog("config_json:"+JSON.stringify(_obj)+"  langConfig_json:",JSON.stringify(_langConfigObj));
        StaticData.langConfig = new LangConfigData(_langConfigObj);
        var _loadingTip: string = RES.getRes("loadingTipList_txt");

        this._gameData = this.facade.retrieveProxy(GameBaseDataProxy.NAME) as GameBaseDataProxy;
        this._gameData.addLoadingTip(_loadingTip);


        if (StaticData.IS_DEBUG) {
            this.connectSocket();
        } else {
            this.getQQInfo();
        }
        // this.sendNotification(StaticEvent.N_C_LOAD_MAIN_SCENE);
        // this.sendNotification(StaticEvent.N_C_LOAD_PLAY_SCENE,[1001, 1002, 1003, 1004, 1005]);
    }
    private getQQInfo() {
        if (!StaticData.OPEN_ID) {
            this.connectSocket();
            return;
        }
        this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
        var _sendVO: HttpSendVO = new HttpSendVO(
            StaticData.getReqHttpUrl(StaticData.configVO.getInfoUrl)+"&platid="+StaticData.PLAT_ID,
            egret.HttpMethod.GET,
            "",
            this.loadInfoCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_BIG,
            StaticData.langConfig.getLangStrByID(100003));
        this.sendNotification(StaticEvent.N_C_HTTP_SEND_DATA, _sendVO);
    }
    private loadInfoCom(str: string) {
        var _qqInfoObj = new RecInfoQQObj(JSON.parse(str));
        if (_qqInfoObj.ret == 0) {
            this._gameData.addQQInfoObj(_qqInfoObj);
            this.connectSocket();
        } else {
            AlertCtrl.getInstance().showAlert(_qqInfoObj.msg);
        }
    }
    private connectSocket() {
        this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100006), false));
        var _socketProxy: WebSocketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy;
        _socketProxy.connectSocket(StaticData.configVO.server, this.connectCallBack.bind(this));
    }
    private connectCallBack(isConnect: boolean) {
        this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
        // StaticData.OPEN_ID=StaticData.device_id;
        if (isConnect) {
            if (StaticData.OPEN_ID) {
                // StaticData.PLAT_ID =ReqGameServerObj.PLATID_1013;
                this.sendNotification(StaticEvent.N_C_LOAD_GAME_SERVER, new ReqGameServerObj(StaticData.OPEN_ID));
            } else {
                this.sendNotification(StaticEvent.N_C_LOAD_TITLE_SCENE);
            }
        }
    }
}
