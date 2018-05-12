/**
 *
 * @author 
 *
 */

class LoadingViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "loadingViewMediator";
    public static LOAD_TYPE_NONE: string = "none";//不显示
    public static LOAD_TYPE_BIG: string = "big";
    public static LOAD_TYPE_SMALL: string = "small";
    public static LOAD_TYPE_FIREST: string = "first";

    private _gameBaseData: GameBaseDataProxy;

    public constructor(view: PopupBaseLayer) {
        super(LoadingViewMediator.NAME, view);
    }
    public listNotificationInterests(): Array<any> {
        return [
            StaticEvent.N_M_LOADING_SHOW,
            StaticEvent.N_M_LOADING_DEL,
            StaticEvent.N_M_LOADING_PROGRESS
        ]
    }
    private newLoadingView(type: string): BaseLoadingView {
        if (type == LoadingViewMediator.LOAD_TYPE_BIG) {
            return new LoadingBigView();
        } else if (type == LoadingViewMediator.LOAD_TYPE_SMALL) {
            return new LoadingSmallView();
        } else if (type == LoadingViewMediator.LOAD_TYPE_FIREST) {
            return new LoadingFirstView();
        } else {
            return null;
        }
    }
    private getLoadingView(loadingID: number): BaseLoadingView {
        var _num: number = this.view.numChildren;
        for (var i: number = 0; i < _num; i++) {
            var _view: BaseLoadingView = this.view.getChildAt(i) as BaseLoadingView;
            if (_view && _view.loadingID == loadingID) {
                return _view;
            }
        }
        return null;
    }
    private addLoadingView(_loadVO: LoadingVO): void {
        var _loadingView: BaseLoadingView = this.newLoadingView(_loadVO.loadingType);
        if (_loadingView == null) {
            return;
        }
        if (!this._gameBaseData) {
            this._gameBaseData = this.facade.retrieveProxy(GameBaseDataProxy.NAME) as GameBaseDataProxy;
        }
        var _tipStr: string = _loadVO.tip ? _loadVO.tip : this._gameBaseData.getLoadingTipRand();

        if (_tipStr == null) {
            _tipStr = _loadVO.title;
        }
        _loadingView.width = this.view.stage.stageWidth;
        _loadingView.height = this.view.stage.stageHeight;
        _loadingView.setIsPer(_loadVO.isPer);
        _loadingView.setTitle(_loadVO.title);
        _loadingView.setTips(_tipStr);
        _loadingView.loadingID = _loadVO.loadingID;
        _loadingView.horizontalCenter = 0;
        _loadingView.verticalCenter = 0;
        this.view.addView(_loadingView);
    }
    private removeLoadingView(loadingID: number = 0): void {
        var _loadingView: BaseLoadingView = this.getLoadingView(loadingID);
        if (_loadingView != null) {
            _loadingView.baseGC();
            this.view.delView(_loadingView);
        }
    }

    public handleNotification(notification: puremvc.INotification): void {
        var _loadingVO: LoadingVO = notification.getBody() as LoadingVO;

        switch (notification.getName()) {
            case StaticEvent.N_M_LOADING_SHOW:
                this.addLoadingView(_loadingVO);
                break;
            case StaticEvent.N_M_LOADING_DEL:
                var _loadingID: number = _loadingVO == null ? 0 : _loadingVO.loadingID;
                this.removeLoadingView(_loadingID);
                break;
            case StaticEvent.N_M_LOADING_PROGRESS:
                var _loadingView: BaseLoadingView = this.getLoadingView(_loadingVO.loadingID);
                if (_loadingView != null) {
                    _loadingView.setProgress(_loadingVO.per);
                }
                break;
        }
    }
    public get view(): PopupBaseLayer {
        return <PopupBaseLayer>this.viewComponent;
    }
}
