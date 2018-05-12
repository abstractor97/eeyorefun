
class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "ApplicationMediator";
    private _currSceneView: BaseSceneView;

    public constructor(viewComponent: any) {
        super(ApplicationMediator.NAME, viewComponent);
    }

    public onRegister(): void {
        this.facade.registerMediator(new LoadingViewMediator(this.main.loadingLayer));
        this.facade.registerMediator(new PopupViewMediator(this.main.popupLayer));
        this.facade.registerMediator(new TipViewMediator(this.main.tipLayer));
        this.facade.registerMediator(new UIViewMediator(this.main.UILayer));

        this.facade.registerMediator(new TitleSceneMediator());
        this.facade.registerMediator(new MainSceneMediator());

        AlertCtrl.getInstance().setContain(this.main.popupLayer);
    }

    public listNotificationInterests(): Array<any> {
        return [

            StaticEvent.N_M_SCENE_LAYER_CHANGE,
            StaticEvent.N_M_SCENE_LAYER_DEL,
        ];
    }

    private delCurrScene() {
        if (this._currSceneView != null) {
            this._currSceneView.gcBase();
            if (this.main.sceneLayer.contains(this._currSceneView)) {
                this.main.sceneLayer.removeChild(this._currSceneView);
            }
            this._currSceneView = null;
        }
    }
    public handleNotification(notification: puremvc.INotification): void {
        var _view: egret.DisplayObject = notification.getBody() as egret.DisplayObject;
        switch (notification.getName()) {
            case StaticEvent.N_M_SCENE_LAYER_CHANGE:
                this.delCurrScene();
                var _sceneview: BaseSceneView = notification.getBody() as BaseSceneView;
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
    }

    public get main(): game.AppContainer {
        return <game.AppContainer><any>(this.viewComponent);
    }
}
