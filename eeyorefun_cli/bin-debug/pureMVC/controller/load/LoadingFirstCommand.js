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
var LoadingFirstCommand = (function (_super) {
    __extends(LoadingFirstCommand, _super);
    function LoadingFirstCommand() {
        var _this = _super.call(this) || this;
        _this._groupName = "loadingRes";
        return _this;
    }
    LoadingFirstCommand.prototype.execute = function (notification) {
        var _loadResVO = new LoadResVO(this._groupName, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_FIREST, "Loading", "loading...");
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadingFirstCommand.prototype.loadResCom = function () {
        var _obj = RES.getRes("config_json");
        StaticData.configVO = new ConfigVO(_obj);
        StaticData.IS_DEBUG = StaticData.configVO.isDebug;
        StaticData.IS_LOG = StaticData.configVO.isLog;
        var _langConfigObj = RES.getRes("langConfig_json");
        // DebugLog.getInstance().showLog("config_json:"+JSON.stringify(_obj)+"  langConfig_json:",JSON.stringify(_langConfigObj));
        StaticData.langConfig = new LangConfigData(_langConfigObj);
        var _loadingTip = RES.getRes("loadingTipList_txt");
        this._gameData = this.facade.retrieveProxy(GameBaseDataProxy.NAME);
        this._gameData.addLoadingTip(_loadingTip);
        if (StaticData.IS_DEBUG) {
            this.connectSocket();
        }
        else {
            this.getQQInfo();
        }
        // this.sendNotification(StaticEvent.N_C_LOAD_MAIN_SCENE);
        // this.sendNotification(StaticEvent.N_C_LOAD_PLAY_SCENE,[1001, 1002, 1003, 1004, 1005]);
    };
    LoadingFirstCommand.prototype.getQQInfo = function () {
        if (!StaticData.OPEN_ID) {
            this.connectSocket();
            return;
        }
        this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
        var _sendVO = new HttpSendVO(StaticData.getReqHttpUrl(StaticData.configVO.getInfoUrl) + "&platid=" + StaticData.PLAT_ID, egret.HttpMethod.GET, "", this.loadInfoCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100003));
        this.sendNotification(StaticEvent.N_C_HTTP_SEND_DATA, _sendVO);
    };
    LoadingFirstCommand.prototype.loadInfoCom = function (str) {
        var _qqInfoObj = new RecInfoQQObj(JSON.parse(str));
        if (_qqInfoObj.ret == 0) {
            this._gameData.addQQInfoObj(_qqInfoObj);
            this.connectSocket();
        }
        else {
            AlertCtrl.getInstance().showAlert(_qqInfoObj.msg);
        }
    };
    LoadingFirstCommand.prototype.connectSocket = function () {
        this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100006), false));
        var _socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME);
        _socketProxy.connectSocket(StaticData.configVO.server, this.connectCallBack.bind(this));
    };
    LoadingFirstCommand.prototype.connectCallBack = function (isConnect) {
        this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
        // StaticData.OPEN_ID=StaticData.device_id;
        if (isConnect) {
            if (StaticData.OPEN_ID) {
                // StaticData.PLAT_ID =ReqGameServerObj.PLATID_1013;
                this.sendNotification(StaticEvent.N_C_LOAD_GAME_SERVER, new ReqGameServerObj(StaticData.OPEN_ID));
            }
            else {
                this.sendNotification(StaticEvent.N_C_LOAD_TITLE_SCENE);
            }
        }
    };
    return LoadingFirstCommand;
}(puremvc.SimpleCommand));
__reflect(LoadingFirstCommand.prototype, "LoadingFirstCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadingFirstCommand.js.map