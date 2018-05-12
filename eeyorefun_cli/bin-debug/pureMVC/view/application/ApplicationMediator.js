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
var ApplicationMediator = (function (_super) {
    __extends(ApplicationMediator, _super);
    function ApplicationMediator(viewComponent) {
        return _super.call(this, ApplicationMediator.NAME, viewComponent) || this;
    }
    ApplicationMediator.prototype.onRegister = function () {
        this.facade.registerMediator(new LoadingViewMediator(this.main.loadingLayer));
        this.facade.registerMediator(new PopupViewMediator(this.main.popupLayer));
        this.facade.registerMediator(new TipViewMediator(this.main.tipLayer));
        this.facade.registerMediator(new UIViewMediator(this.main.UILayer));
        this.facade.registerMediator(new TitleSceneMediator());
        this.facade.registerMediator(new MainSceneMediator());
        AlertCtrl.getInstance().setContain(this.main.popupLayer);
    };
    ApplicationMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_SCENE_LAYER_CHANGE,
            StaticEvent.N_M_SCENE_LAYER_DEL,
        ];
    };
    ApplicationMediator.prototype.delCurrScene = function () {
        if (this._currSceneView != null) {
            this._currSceneView.gcBase();
            if (this.main.sceneLayer.contains(this._currSceneView)) {
                this.main.sceneLayer.removeChild(this._currSceneView);
            }
            this._currSceneView = null;
        }
    };
    ApplicationMediator.prototype.handleNotification = function (notification) {
        var _view = notification.getBody();
        switch (notification.getName()) {
            case StaticEvent.N_M_SCENE_LAYER_CHANGE:
                this.delCurrScene();
                var _sceneview = notification.getBody();
                if (_sceneview == null) {
                    return;
                }
                this._currSceneView = _sceneview;
                this._currSceneView.width = this.main.stage.stageWidth;
                this._currSceneView.height = this.main.stage.stageHeight;
                this.main.sceneLayer.addChild(this._currSceneView);
                break;
            case StaticEvent.N_M_SCENE_LAYER_DEL:
                this.delCurrScene();
                break;
        }
    };
    Object.defineProperty(ApplicationMediator.prototype, "main", {
        get: function () {
            return (this.viewComponent);
        },
        enumerable: true,
        configurable: true
    });
    ApplicationMediator.NAME = "ApplicationMediator";
    return ApplicationMediator;
}(puremvc.Mediator));
__reflect(ApplicationMediator.prototype, "ApplicationMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=ApplicationMediator.js.map