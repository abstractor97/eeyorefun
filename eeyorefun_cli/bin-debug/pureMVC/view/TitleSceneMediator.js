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
var TitleSceneMediator = (function (_super) {
    __extends(TitleSceneMediator, _super);
    function TitleSceneMediator() {
        return _super.call(this, TitleSceneMediator.NAME) || this;
    }
    TitleSceneMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_TITLE_SCENE_SHOW
        ];
    };
    TitleSceneMediator.prototype.handleNotification = function (notification) {
        switch (notification.getName()) {
            case StaticEvent.N_M_TITLE_SCENE_SHOW:
                this._gameData = this.facade.retrieveProxy(GameBaseDataProxy.NAME);
                this._titleSceneUILayer = new TitleSceneUILayer();
                this._titleSceneUILayer.setCallBack(this.onTitleUIEvent.bind(this));
                this.sendNotification(StaticEvent.N_M_UI_SHOW, this._titleSceneUILayer);
                this._titleSceneView = new TitleSceneLayer();
                this._titleSceneView.setCallBackGC(this.gcSceneCallBack.bind(this));
                this.sendNotification(StaticEvent.N_M_SCENE_LAYER_CHANGE, this._titleSceneView);
                break;
        }
    };
    TitleSceneMediator.prototype.onTitleUIEvent = function (e) {
        switch (e.data) {
            case this._titleSceneUILayer.btn_login:
                // this._titleSceneUILayer.showDropGood();
                AudioManager.getInstance().playEffecAudio("sound_blank_mp3");
                StaticData.PLAT_ID = ReqGameServerObj.PLATID_1011;
                _super.prototype.loadRes.call(this, "loginRes", this.showLoginView.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100002));
                break;
            case this._titleSceneUILayer.btn_guest:
                AlertCtrl.getInstance().showAlert("mvc测试成功!!!");
                AudioManager.getInstance().playEffecAudio("sound_blank_mp3");
                // StaticData.PLAT_ID = ReqGameServerObj.PLATID_1010;
                // StaticData.OPEN_ID = StaticData.device_id;
                // this.sendNotification(StaticEvent.N_C_LOAD_GAME_SERVER, new ReqGameServerObj(StaticData.device_id));
                break;
            case this._titleSceneUILayer.btn_register:
                // AudioManager.getInstance().playEffecAudio("sound_blank_mp3");
                // StaticData.PLAT_ID = ReqGameServerObj.PLATID_1011;
                _super.prototype.loadRes.call(this, "loginRes", this.showRegistView.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100002));
                break;
        }
    };
    TitleSceneMediator.prototype.showLoginView = function () {
        this.closeLoginView();
        this._loginView = new LoginView();
        this._loginView.setCallBack(this.onLoginEvent.bind(this));
        this.sendNotification(StaticEvent.N_M_POPUP_LAYER_ADD, this._loginView);
    };
    TitleSceneMediator.prototype.onLoginEvent = function (e) {
        switch (e.data) {
            case this._loginView.btn_login:
                var _reqServerObj = this._loginView.getReqServerObj();
                if (_reqServerObj) {
                    this.sendNotification(StaticEvent.N_C_LOAD_GAME_SERVER, _reqServerObj);
                    this.closeLoginView();
                }
                break;
            case this._loginView.btn_cancel:
                this.closeLoginView();
                break;
        }
    };
    TitleSceneMediator.prototype.onLoginCom = function (socketVO) {
    };
    TitleSceneMediator.prototype.closeLoginView = function () {
        if (this._loginView) {
            this._loginView.thisClose();
        }
        this._loginView = null;
    };
    TitleSceneMediator.prototype.showRegistView = function () {
        this._registView = new RegistView();
        this._registView.setCallBack(this.onRegistEvent.bind(this));
        this.sendNotification(StaticEvent.N_M_POPUP_LAYER_ADD, this._registView);
    };
    TitleSceneMediator.prototype.removeRegistView = function () {
        if (this._registView) {
            this._registView.thisClose();
        }
        this._registView = null;
    };
    TitleSceneMediator.prototype.onRegistEvent = function (e) {
        switch (e.data) {
            case this._registView.btn_regist:
                this._reqRegistObj = this._registView.getRegistObj();
                if (this._reqRegistObj) {
                    this.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(this._reqRegistObj, this.onNewRegistCom.bind(this)));
                }
                break;
            case this._registView.btn_cancel:
                this.removeRegistView();
                break;
        }
    };
    TitleSceneMediator.prototype.onNewRegistCom = function (socketVO) {
        this.removeRegistView();
        var _recServerObj = new RecGameServerObj(socketVO.data);
        StaticData.S_ID = _recServerObj.sid;
        var _socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME);
        _socketProxy.connectSocket(_recServerObj.server, this.socketRegistConnect.bind(this));
    };
    TitleSceneMediator.prototype.socketRegistConnect = function (isConn) {
        if (isConn) {
            StaticData.OPEN_ID = this._reqRegistObj.acc;
            this.sendNotification(StaticEvent.N_C_LOAD_GAME_REGISTER_UID, StaticData.OPEN_ID);
        }
    };
    TitleSceneMediator.prototype.gcSceneCallBack = function () {
        if (this._titleSceneUILayer) {
            this._titleSceneUILayer.baseGC();
        }
        this.facade.sendNotification(StaticEvent.N_M_UI_DEL, this._titleSceneUILayer);
        this._titleSceneUILayer = null;
    };
    TitleSceneMediator.NAME = "TitleSceneMediator";
    return TitleSceneMediator;
}(BaseMediator));
__reflect(TitleSceneMediator.prototype, "TitleSceneMediator");
//# sourceMappingURL=TitleSceneMediator.js.map