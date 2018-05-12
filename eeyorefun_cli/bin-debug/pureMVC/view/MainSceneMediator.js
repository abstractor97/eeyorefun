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
var MainSceneMediator = (function (_super) {
    __extends(MainSceneMediator, _super);
    function MainSceneMediator() {
        return _super.call(this, MainSceneMediator.NAME) || this;
    }
    MainSceneMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_MAIN_SCENE_SHOW,
        ];
    };
    MainSceneMediator.prototype.handleNotification = function (notification) {
        var _socketVO = notification.getBody();
        switch (notification.getName()) {
            case StaticEvent.N_M_MAIN_SCENE_SHOW:
                var _obj = notification.getBody();
                if (_obj) {
                    this._noteObj = _obj;
                }
                AudioManager.getInstance().stopMainSound();
                this._isCurrScene = true;
                this._userOV = this.facade.retrieveProxy(UserInfoProxy.NAME).userInfoObj;
                this._mainSceneView = new MainSceneLayerr();
                this._mainSceneView.setCallBackGC(this.gcSceneCallBack.bind(this));
                this.sendNotification(StaticEvent.N_M_SCENE_LAYER_CHANGE, this._mainSceneView);
                if (!this._baseProxy) {
                    this._baseProxy = this.facade.retrieveProxy(GameBaseDataProxy.NAME);
                }
                this.facade.retrieveProxy(WebSocketProxy.NAME).startHeart();
                this._mainSceneUI = new MainSceneUIView(this._userOV, this._baseProxy.getLevelVO());
                this.sendNotification(StaticEvent.N_M_UI_SHOW, this._mainSceneUI);
                this._mainSceneUI.setCallBack(this.onMainUIEvent.bind(this));
                EventManager.getInstance().sendEvent(EventManager.EVENT_GAME_DO, 20001);
                break;
        }
    };
    MainSceneMediator.prototype.onMainUIEvent = function (e) {
        switch (e.data) {
        }
    };
    MainSceneMediator.prototype.gcSceneCallBack = function () {
        this.facade.sendNotification(StaticEvent.N_M_UI_DEL, this._mainSceneUI);
        this._mainSceneUI.baseGC();
        this._mainSceneUI = null;
        this._mainSceneView = null;
        this._isCurrScene = false;
        //RES.destroyRes(StaticData.RES_MainScene);
    };
    MainSceneMediator.NAME = "MainSceneMediator";
    return MainSceneMediator;
}(BaseMediator));
__reflect(MainSceneMediator.prototype, "MainSceneMediator");
//# sourceMappingURL=MainSceneMediator.js.map