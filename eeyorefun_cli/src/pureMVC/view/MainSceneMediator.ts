/**
 *
 * @author 
 *
 */
class MainSceneMediator extends BaseMediator {
    public static NAME: string = "MainSceneMediator";

    private _mainSceneUI: MainSceneUIView;
    private _mainSceneView: MainSceneLayerr;
    private _isCurrScene: boolean;
    private _isNewTask: boolean;
    private _noteObj: RecNoteObj;
    private _userOV: UserBaseInfoObj;
    private _baseProxy: GameBaseDataProxy;

    public constructor() {
        super(MainSceneMediator.NAME);
    }
    public listNotificationInterests(): Array<any> {
        return [
            StaticEvent.N_M_MAIN_SCENE_SHOW,
        ];
    }
    public handleNotification(notification: puremvc.INotification): void {
        var _socketVO: SocketRecVO = notification.getBody();
        switch (notification.getName()) {
            case StaticEvent.N_M_MAIN_SCENE_SHOW:
                var _obj = notification.getBody();
                if (_obj) {
                    this._noteObj = _obj;
                }
                AudioManager.getInstance().stopMainSound();
                this._isCurrScene = true;
                this._userOV = (this.facade.retrieveProxy(UserInfoProxy.NAME) as UserInfoProxy).userInfoObj;
                this._mainSceneView = new MainSceneLayerr();
                this._mainSceneView.setCallBackGC(this.gcSceneCallBack.bind(this));
                this.sendNotification(StaticEvent.N_M_SCENE_LAYER_CHANGE, this._mainSceneView);

                if (!this._baseProxy) {
                    this._baseProxy = this.facade.retrieveProxy(GameBaseDataProxy.NAME) as GameBaseDataProxy;
                }

                (this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy).startHeart();
                this._mainSceneUI = new MainSceneUIView(this._userOV, this._baseProxy.getLevelVO());
                this.sendNotification(StaticEvent.N_M_UI_SHOW, this._mainSceneUI);
                this._mainSceneUI.setCallBack(this.onMainUIEvent.bind(this));
                EventManager.getInstance().sendEvent(EventManager.EVENT_GAME_DO, 20001);
                break;
        }
    }
    private onMainUIEvent(e: CustomEventMy): void {
        switch (e.data) {
            
        }
    }

    private gcSceneCallBack(): void {
        this.facade.sendNotification(StaticEvent.N_M_UI_DEL, this._mainSceneUI);
        this._mainSceneUI.baseGC();
        this._mainSceneUI = null;
        this._mainSceneView = null;
        this._isCurrScene = false;
        //RES.destroyRes(StaticData.RES_MainScene);
    }
}
