/**
 *
 * @author 
 *
 */
class TitleSceneMediator extends BaseMediator {
    public static NAME: string = "TitleSceneMediator";
    private _titleSceneUILayer: TitleSceneUILayer;
    private _titleSceneView: TitleSceneLayer;
    private _gameData: GameBaseDataProxy;
    private _registView: RegistView;
    public constructor() {
        super(TitleSceneMediator.NAME);
    }
    public listNotificationInterests(): Array<any> {
        return [
            StaticEvent.N_M_TITLE_SCENE_SHOW
        ];
    }
    public handleNotification(notification: puremvc.INotification): void {
        switch (notification.getName()) {
            case StaticEvent.N_M_TITLE_SCENE_SHOW:
                this._gameData = this.facade.retrieveProxy(GameBaseDataProxy.NAME) as GameBaseDataProxy;
                this._titleSceneUILayer = new TitleSceneUILayer();
                this._titleSceneUILayer.setCallBack(this.onTitleUIEvent.bind(this));
                this.sendNotification(StaticEvent.N_M_UI_SHOW, this._titleSceneUILayer);
                this._titleSceneView = new TitleSceneLayer();
                this._titleSceneView.setCallBackGC(this.gcSceneCallBack.bind(this));
                this.sendNotification(StaticEvent.N_M_SCENE_LAYER_CHANGE, this._titleSceneView);
                break;
        }
    }

    private onTitleUIEvent(e: CustomEventMy): void {
        switch (e.data) {
            case this._titleSceneUILayer.btn_login:
                // this._titleSceneUILayer.showDropGood();

                AudioManager.getInstance().playEffecAudio("sound_blank_mp3");
                StaticData.PLAT_ID = ReqGameServerObj.PLATID_1011;
                super.loadRes("loginRes", this.showLoginView.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100002));
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
                super.loadRes("loginRes", this.showRegistView.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100002));
                break;
        }
    }
    private _loginView: LoginView;
    private showLoginView() {
        this.closeLoginView();
        this._loginView = new LoginView();
        this._loginView.setCallBack(this.onLoginEvent.bind(this));
        this.sendNotification(StaticEvent.N_M_POPUP_LAYER_ADD, this._loginView);
    }
    private onLoginEvent(e: CustomEventMy) {
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
    }
    private onLoginCom(socketVO: SocketRecVO) {

    }
    private closeLoginView() {
        if (this._loginView) {
            this._loginView.thisClose();
        }
        this._loginView = null;
    }
    private showRegistView() {
        this._registView = new RegistView();
        this._registView.setCallBack(this.onRegistEvent.bind(this));
        this.sendNotification(StaticEvent.N_M_POPUP_LAYER_ADD, this._registView);
    }
    private removeRegistView() {
        if (this._registView) {
            this._registView.thisClose();
        }
        this._registView = null;
    }
    private _reqRegistObj: ReqNewRegistObj;
    private onRegistEvent(e: CustomEventMy) {
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
    }
    private onNewRegistCom(socketVO: SocketRecVO) {
        this.removeRegistView();
        var _recServerObj = new RecGameServerObj(socketVO.data);
        StaticData.S_ID = _recServerObj.sid;
        var _socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy;
        _socketProxy.connectSocket(_recServerObj.server, this.socketRegistConnect.bind(this));
    }
    private socketRegistConnect(isConn: boolean) {
        if (isConn) {
            StaticData.OPEN_ID = this._reqRegistObj.acc;
            this.sendNotification(StaticEvent.N_C_LOAD_GAME_REGISTER_UID, StaticData.OPEN_ID);
        }
    }
    private gcSceneCallBack(): void {
        if (this._titleSceneUILayer) {
            this._titleSceneUILayer.baseGC();
        }
        this.facade.sendNotification(StaticEvent.N_M_UI_DEL, this._titleSceneUILayer);
        this._titleSceneUILayer = null;
    }
}

